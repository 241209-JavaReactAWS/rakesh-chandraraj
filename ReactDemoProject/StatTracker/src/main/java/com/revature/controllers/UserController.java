package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.models.User;
import com.revature.services.UserService;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/users")
public class UserController {
    
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /*
     * Authorization and authentication (the two main concepts for security) can often be complicated and 
     * there are a variety of solutions to help with this 
     * 
     * Sessions 
     * - Server based 
     * - Store which user is logged in inside the server and send a session key to the client to then 
     *   reaccess their information / endpoints 
     * 
     * JWT / Tokens 
     * - Client based 
     * - The backend will generate the token and send it back upon a successful login attempt. This token is 
     *   stored by the frontend and decrypted by the backend as needed to get the appropriate information 
     * - Adheres more to REST constraints 
     */

    // : LOGIN
    @PostMapping("/login")
    public ResponseEntity<User> loginHandler(@RequestBody User user, HttpSession session) {
        // Now we need to validate the user's credentials that they provided 
        User returnedUser = userService.login(user.getUsername(), user.getPassword());
        if (returnedUser == null) {
            // This means that the user had the wrong credentials or we couldn't find the user 
            // with the specific username or password
            return ResponseEntity.badRequest().build();
            // Same as return new ResponseEntity(HTTPStatus.BAD_REQUEST);
        }

        // We'll store some information inside of the session to hold it for later 
        session.setAttribute("username", returnedUser.getUsername());
        session.setAttribute("userId", returnedUser.getUserID());
        session.setAttribute("role", returnedUser.getRole());
        // session.setMaxInactiveInterval(1000);

        // Otherwise, we have a successful login request 
        return ResponseEntity.ok(returnedUser);
    }

    // : LOGOUT
    @PostMapping("/logout") 
    public ResponseEntity<?> logout(HttpSession session) {
        // To log a user out, we must invalidate the session 
        session.invalidate();
        return ResponseEntity.noContent().build();
        // .build() is used for those without a response body 
    }

    // : ADD PLAYER TO FAVORITES 
    @PostMapping("/favorites/{playerId}")
    public ResponseEntity<User> addPlayerToFavoritesHandler(HttpSession session, @PathVariable int playerId) {
        // Validate that he user is logged in
        // One way: check if the session is brand new 
        // Another way: check if the user has a username stored
        if (session.isNew() || session.getAttribute("username") == null) {
            // The user isn't logged in
            return ResponseEntity.status(401).build();
            // Status code 401 means that the user isn't logged in (not to be confused with 403, which 
            // means that the user is logged in, but with the wrong permissions)
        }
        
        // At this point, the user is logged in 
        User returnedUser = userService.addPlayerToFavorites((String)session.getAttribute("username"), playerId);
        
        // Now, let's check if the method was handled correctly 
        if (returnedUser == null) {
            return ResponseEntity.badRequest().build();
        }

        // Otherwise, the operation was successful and the player was added to the user's favorites
        return ResponseEntity.ok(returnedUser);
    }

    // : REMOVE PLAYER FROM FAVORITES 
    @DeleteMapping("/favorites/{playerId}")
    public ResponseEntity<User> deletePlayerFromFavoritesHandler(HttpSession session, int playerId) {

        if (session.isNew() || session.getAttribute("username") == null) {
            return ResponseEntity.status(401).build();
        }
        
        User returnedUser = userService.removePlayerFromFavorites((String)session.getAttribute("username"), playerId);
        
        if (returnedUser == null) {
            return ResponseEntity.badRequest().build();
        }

        return ResponseEntity.ok(returnedUser);
    }

}
