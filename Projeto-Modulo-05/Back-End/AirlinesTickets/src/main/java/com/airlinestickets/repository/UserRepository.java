package com.airlinestickets.repository;

import java.util.Optional;

import com.airlinestickets.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    Optional<User> findUserByEmail(String email);

    Boolean existsByEmail(String email);
}
