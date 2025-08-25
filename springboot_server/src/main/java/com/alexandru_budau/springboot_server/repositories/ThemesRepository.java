package com.alexandru_budau.springboot_server.repositories;

import com.alexandru_budau.springboot_server.models.Themes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ThemesRepository extends JpaRepository<Themes, Long> {
}
