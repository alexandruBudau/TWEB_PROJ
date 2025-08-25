package com.alexandru_budau.springboot_server.repositories;

import com.alexandru_budau.springboot_server.models.Actors;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActorsRepository extends JpaRepository<Actors, Long> {
}
