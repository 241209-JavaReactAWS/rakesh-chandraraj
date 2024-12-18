package com.revature.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.revature.models.User;

public interface UserDAO extends JpaRepository<User, Integer> {

    /*
     * Adds in basic CRUD operations with the primary key field for the entity
     * So if we want to add any other queries, we should list them here
     */

    // All that's needed since get + <object> + By + <field> (datatype field)
    Optional<User> getUserByUsername(String username);

}
