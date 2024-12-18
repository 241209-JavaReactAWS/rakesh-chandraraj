package com.revature.models;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "users")
public class User {

    // This class represents our User table and all the associated info with it

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int userID; 

    @Column(unique=true)
    private String username;

    private String password;

    // Annotations for Relationships
    @ManyToMany
    @JoinTable(
            name = "users_players",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "player_id")
    )
    private Set<Player> favorites;
    // Reason for using a Set is because the items will be unique, and Sets don't allow for duplicates 

    // This stores the user tole in the table as a string; default is a number
    @Enumerated(EnumType.STRING)
    private Role role;

    public User() {

    }

    public User(int userID, String username, String password, Set<Player> favorites, Role role) {
        this.userID = userID;
        this.username = username;
        this.password = password;
        this.favorites = favorites;
        this.role = role;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public java.lang.String getUsername() {
        return username;
    }

    public void setUsername(java.lang.String username) {
        this.username = username;
    }

    public java.lang.String getPassword() {
        return password;
    }

    public void setPassword(java.lang.String password) {
        this.password = password;
    }

    public Set<Player> getFavorites() {
        return favorites;
    }

    public void setFavorites(Set<Player> favorites) {
        this.favorites = favorites;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
