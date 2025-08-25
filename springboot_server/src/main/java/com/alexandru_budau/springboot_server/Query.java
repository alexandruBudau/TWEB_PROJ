package com.alexandru_budau.springboot_server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

import java.util.List;
import java.util.Map;

@Component
public class Query {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostConstruct
    public void runExampleQueries() {
        // Actors query
        String sqlActors = "SELECT name, role FROM actors WHERE actor_id = 1000001 LIMIT 5";
        List<Map<String, Object>> resultsActors = jdbcTemplate.queryForList(sqlActors);
        System.out.println("Actors:");
        resultsActors.forEach(row -> System.out.println(row));

        // Movies query
        String sqlMovies = "SELECT name, date, rating FROM movies LIMIT 5";
        List<Map<String, Object>> resultsMovies = jdbcTemplate.queryForList(sqlMovies);
        System.out.println("\nMovies:");
        resultsMovies.forEach(row -> System.out.println(row));

        // Crew query
        String sqlCrew = "SELECT name, role FROM crew LIMIT 5";
        List<Map<String, Object>> resultsCrew = jdbcTemplate.queryForList(sqlCrew);
        System.out.println("\nCrew:");
        resultsCrew.forEach(row -> System.out.println(row));

        // Posters query
        String sqlPosters = "SELECT id, link FROM posters LIMIT 5";
        List<Map<String, Object>> resultsPosters = jdbcTemplate.queryForList(sqlPosters);
        System.out.println("\nPosters:");
        resultsPosters.forEach(row -> System.out.println(row));

        // Countries query

        String sqlCountries = "SELECT country FROM countries LIMIT 5";
        List<Map<String, Object>> resultsCountries = jdbcTemplate.queryForList(sqlCountries);
        System.out.println("\nCountries:");
        resultsCountries.forEach(row -> System.out.println(row));

        //Oscar awards query
        String sqlOscars = "SELECT * FROM the_oscar_awards LIMIT 5";
        List<Map<String, Object>> resultsOscars = jdbcTemplate.queryForList(sqlOscars);
        System.out.println("\nOscars:");
        resultsOscars.forEach(row -> System.out.println(row));

    }

}
