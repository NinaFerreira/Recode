package com.airlinestickets.repository;

import java.util.Optional;

import com.airlinestickets.model.Cliente;
import com.airlinestickets.model.User;
import com.airlinestickets.model.Viagem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
    Optional<Cliente> findClienteByUser(User user);
    Optional<Cliente> findClienteByViagens(Viagem viagem);
}


