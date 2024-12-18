package com.revature.services;

import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.daos.PlayerDAO;
import com.revature.daos.UserDAO;
import com.revature.models.Player;
import com.revature.models.User;

@Service
public class UserService {
    
    private final UserDAO userDAO;
    private final PlayerDAO playerDAO;

    @Autowired
    public UserService(UserDAO userDAO, PlayerDAO playerDAO) {
        this.userDAO = userDAO;
        this.playerDAO = playerDAO;
    }

    // : LOGIN METHOD 
    public User login(String username, String password) {
        // Look up the user by the username
        Optional<User> possibleUser = userDAO.getUserByUsername(username);
        if (possibleUser.isEmpty()) {
            return null;
        }

        // At this point, we've validated that the user exists 
        User returnedUser = possibleUser.get();

        // Validate the password added in and make sure it matchs the db password
        if (returnedUser.getPassword().equals(password)) {
            return returnedUser;
        }

        // If all else fails for whatever reason, just return null
        return null;
        
    }

    // : ADD PLAYER TO USER'S FAVORITES 
    public User addPlayerToFavorites(String username, int playerId) {
        // Look up the user and the player
        Optional<User> possibleUser = userDAO.getUserByUsername(username); 
        Optional<Player> possiblePlayer = playerDAO.findById(playerId); 

        // Validate that they both exist 
        if (possibleUser.isEmpty() || possiblePlayer.isEmpty()) {
            return null;
        }

        // Extract the User and Player values (now that they exist) 
        User returnedUser = possibleUser.get();
        Player returnedPlayer = possiblePlayer.get();

        // Add the player to the list of favorites 
        Set<Player> favorites = returnedUser.getFavorites();
        favorites.add(returnedPlayer);
        returnedUser.setFavorites(favorites);

        // Save the user now that the info is updated 
        return userDAO.save(returnedUser);
    }

    // : REMOVE PLAYER TO USER'S FAVORITES 
    public User removePlayerFromFavorites(String username, int playerId) {
        // Look up the user and the player
        Optional<User> possibleUser = userDAO.getUserByUsername(username); 
        Optional<Player> possiblePlayer = playerDAO.findById(playerId); 

        // Validate that they both exist 
        if (possibleUser.isEmpty() || possiblePlayer.isEmpty()) {
            return null;
        }

        // Extract the User and Player values (now that they exist) 
        User returnedUser = possibleUser.get();
        Player returnedPlayer = possiblePlayer.get();

        // Remove the player to the list of favorites 
        Set<Player> favorites = returnedUser.getFavorites();
        // Future validation would include if the set already has the player to add
        favorites.remove(returnedPlayer);
        returnedUser.setFavorites(favorites);

        // Save the user now that the info is updated 
        return userDAO.save(returnedUser);
    }

}
