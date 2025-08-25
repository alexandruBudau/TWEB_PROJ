package com.alexandru_budau.springboot_server.controllers;

import com.alexandru_budau.springboot_server.models.Genres;
import com.alexandru_budau.springboot_server.services.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/genres")
public class GenreController {

    @Autowired
    private GenreService genresService;

    @GetMapping
    public List<Genres> getAllGenres() {
        return genresService.getAllGenres();
    }

    @PostMapping
    public Genres createGenre(@RequestBody Genres genre) {
        return genresService.createGenre(genre);
    }
}
