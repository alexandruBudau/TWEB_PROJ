package com.alexandru_budau.springboot_server.repositories;

import com.alexandru_budau.springboot_server.models.Studios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudiosRepository extends JpaRepository<Studios, Long> {
}
