package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.revature.models.Player;
import com.revature.models.Role;
import com.revature.services.PlayerService;

import jakarta.servlet.http.HttpSession;

@Controller
@RequestMapping("/players")
public class PlayerController {
    
    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    // : VIEW ALL PLAYERS 
    @GetMapping
    public List<Player> getAllPlayersHandler() {
        return playerService.getAllPlayers();
    }

    // : ADD A NEW PLAYER (Admin Only)
    @PostMapping
    public ResponseEntity<Player> createNewPlayerHandler(HttpSession session, @RequestBody Player player) {
        // Check that the user is logged in 
        if (session.isNew() || session.getAttribute("username") == null) {
            return ResponseEntity.status(401).build();
        }

        // We know the user is logged in, but now we need to check if the user is an admin 
        if ((Role)session.getAttribute("role") != Role.ADMIN) {
            // This means that the user is signed in, but NOT an admin
            return ResponseEntity.status(403).build();
        }

        // At this point, the user is logged in as an admin
        // Finally, add the player to the database 
        Player returnedPlayer = playerService.createNewPlayer(player);
        if (returnedPlayer == null) {
            return ResponseEntity.badRequest().build();
        }
        // 201 is the CREATED status code 
        return ResponseEntity.status(201).body(returnedPlayer);
    }

    // TODO: UPDATE A PLAYER (Admin Only)
    


}
