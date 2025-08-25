package com.alexandru_budau.springboot_server.controllers;

import com.alexandru_budau.springboot_server.models.Movies;
import com.alexandru_budau.springboot_server.services.MoviesService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
public class MoviesController {

    private final MoviesService moviesService;

    public MoviesController(MoviesService moviesService) {
        this.moviesService = moviesService;
    }


    @GetMapping("/all")
    public List<Movies> getAllMovies() {
        return moviesService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Movies> getMovieById(@PathVariable Long id) {
        return moviesService.findById(id);
    }

    @PostMapping("/")
    public Movies createMovie(@RequestBody Movies movie) {
        return moviesService.save(movie);
    }

    @PutMapping("/{id}")
    public Movies updateMovie(@PathVariable Long id, @RequestBody Movies movie) {
        movie.setId(id);
        return moviesService.save(movie);
    }

    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable Long id) {
        moviesService.deleteById(id);
    }
}
