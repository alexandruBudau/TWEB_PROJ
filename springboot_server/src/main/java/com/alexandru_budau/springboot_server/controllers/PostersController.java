package com.alexandru_budau.springboot_server.controllers;

import com.alexandru_budau.springboot_server.models.Posters;
import com.alexandru_budau.springboot_server.services.PostersService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/posters")
public class PostersController {

    private final PostersService postersService;

    public PostersController(PostersService postersService) {
        this.postersService = postersService;
    }

    @GetMapping("/all")
    public List<Posters> getAllPosters() {
        return postersService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Posters> getPosterById(@PathVariable Long id) {
        return postersService.findById(id);
    }

    @PostMapping("/")
    public Posters createPoster(@RequestBody Posters poster) {
        return postersService.save(poster);
    }

    @PutMapping("/{id}")
    public Posters updatePoster(@PathVariable Long id, @RequestBody Posters poster) {
        poster.setId(id);
        return postersService.save(poster);
    }

    @DeleteMapping("/{id}")
    public void deletePoster(@PathVariable Long id) {
        postersService.deleteById(id);
    }
}
