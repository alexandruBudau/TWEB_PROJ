package com.alexandru_budau.springboot_server.repositories;

import com.alexandru_budau.springboot_server.models.OscarAwards;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OscarAwardsRepository extends JpaRepository<OscarAwards, Long> {
}
