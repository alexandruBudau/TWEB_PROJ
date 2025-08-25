package com.alexandru_budau.springboot_server.repositories;

import com.alexandru_budau.springboot_server.models.Posters;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostersRepository extends JpaRepository<Posters, Long> {
}
