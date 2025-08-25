package com.alexandru_budau.springboot_server.services;

import com.alexandru_budau.springboot_server.models.Movies;
import com.alexandru_budau.springboot_server.repositories.MoviesRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MoviesService {

    private final MoviesRepository moviesRepository;

    public MoviesService(MoviesRepository moviesRepository) {
        this.moviesRepository = moviesRepository;
    }

    public List<Movies> findAll() {
        return moviesRepository.findAll();
    }

    public Optional<Movies> findById(Long id) {
        return moviesRepository.findById(id);
    }

    public Movies save(Movies movie) {
        return moviesRepository.save(movie);
    }

    public void deleteById(Long id) {
        moviesRepository.deleteById(id);
    }
}
