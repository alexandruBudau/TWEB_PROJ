package com.alexandru_budau.springboot_server.services;

import com.alexandru_budau.springboot_server.models.Genres;
import com.alexandru_budau.springboot_server.repositories.GenreRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GenreService {

    private final GenreRepository genresRepository;

    public GenreService(GenreRepository genresRepository) {
        this.genresRepository = genresRepository;
    }

    public List<Genres> getAllGenres() {
        return genresRepository.findAll();
    }

    public Optional<Genres> findById(Long id) {
        return genresRepository.findById(id);
    }

    public Genres createGenre(Genres genre) {
        return genresRepository.save(genre);
    }

    public void deleteById(Long id) {
        genresRepository.deleteById(id);
    }
}
