package com.alexandru_budau.springboot_server.repositories;

import com.alexandru_budau.springboot_server.models.Movies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesRepository extends JpaRepository<Movies, Long> {
}
