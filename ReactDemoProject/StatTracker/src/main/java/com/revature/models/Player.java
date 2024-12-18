package com.revature.models;

import jakarta.persistence.*;

@Entity
@Table(name = "players")
public class Player {

    // This class represents our Player table and all the associated info with it

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String name;
    
    private String picture; 

    private String picUrl;

    private int passYards;

    private int attempts; 

    private int touchdowns;

    private int interceptions;

    public Player(int id, String name, String picture, String picUrl, int passYards, int attempts, int touchdowns, int interceptions) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.picUrl = picUrl;
        this.passYards = passYards;
        this.attempts = attempts;
        this.touchdowns = touchdowns;
        this.interceptions = interceptions;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getPicUrl() {
        return picUrl;
    }

    public void setPicUrl(String picUrl) {
        this.picUrl = picUrl;
    }

    public int getPassYards() {
        return passYards;
    }

    public void setPassYards(int passYards) {
        this.passYards = passYards;
    }

    public int getAttempts() {
        return attempts;
    }

    public void setAttempts(int attempts) {
        this.attempts = attempts;
    }

    public int getTouchdowns() {
        return touchdowns;
    }

    public void setTouchdowns(int touchdowns) {
        this.touchdowns = touchdowns;
    }

    public int getInterceptions() {
        return interceptions;
    }

    public void setInterceptions(int interceptions) {
        this.interceptions = interceptions;
    }
}
