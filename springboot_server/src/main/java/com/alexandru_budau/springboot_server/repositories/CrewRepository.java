package com.alexandru_budau.springboot_server.repositories;

import com.alexandru_budau.springboot_server.models.Crew;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CrewRepository extends JpaRepository<Crew, Long> {
}
