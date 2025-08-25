package com.alexandru_budau.springboot_server.repositories;

import com.alexandru_budau.springboot_server.models.Countries;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountriesRepository extends JpaRepository<Countries, Long> {
}
