package com.alexandru_budau.springboot_server.repositories;

import com.alexandru_budau.springboot_server.models.Genres;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genres, Long> {
}
