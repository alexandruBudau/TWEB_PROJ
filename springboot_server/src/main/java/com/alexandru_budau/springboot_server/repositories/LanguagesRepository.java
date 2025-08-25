package com.alexandru_budau.springboot_server.repositories;

import com.alexandru_budau.springboot_server.models.Languages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LanguagesRepository extends JpaRepository<Languages, Long> {
}
