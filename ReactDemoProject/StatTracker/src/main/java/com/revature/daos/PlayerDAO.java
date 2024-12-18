package com.revature.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import com.revature.models.Player;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerDAO extends JpaRepository<Player, Integer> {

}
