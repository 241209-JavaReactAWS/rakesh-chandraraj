package com.revature.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.revature.models.Player;

public interface PlayerDAO extends JpaRepository<Player, Integer> {

}
