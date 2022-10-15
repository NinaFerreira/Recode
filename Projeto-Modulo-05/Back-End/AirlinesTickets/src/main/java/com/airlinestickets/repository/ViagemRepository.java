package com.airlinestickets.repository;

import com.airlinestickets.model.Viagem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ViagemRepository extends JpaRepository<Viagem, Integer> {
}
