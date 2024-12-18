package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.revature.daos.PlayerDAO;
import com.revature.models.Player;

public class PlayerService {
    private final PlayerDAO playerDAO;

    @Autowired
    public PlayerService(PlayerDAO playerDAO) {
        this.playerDAO = playerDAO;
    }

    // : GET ALL PLAYERS 
    public List<Player> getAllPlayers() {
        return playerDAO.findAll();
    }

    // : ADD A NEW PLAYER
    public Player createNewPlayer(Player playerToBeAdded) {
        // Here, we'll do validation to make sure that the numbers are valid 
        // After the validation is done, and we know the player is valid, we save them to the database
        return playerDAO.save(playerToBeAdded);
    }

    // : UPDATE AN EXISTING PLAYER 
    public Player updatePlayer(Player playerToBeUpdated) {
        // In terms of validation, a lot of the same validation needs to be done (like in createNewPlayer)
        // Additional pieces of validation is making sure that the player already exists and we only update 
        // the fields they send in
        // When updating information in the database, we also use the same method 
        return playerDAO.save(playerToBeUpdated);
    }

}
