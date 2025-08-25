package com.alexandru_budau.springboot_server.controllers;

import com.alexandru_budau.springboot_server.models.Studios;
import com.alexandru_budau.springboot_server.services.StudiosService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/studios")
public class StudiosController {

    private final StudiosService studiosService;

    public StudiosController(StudiosService studiosService) {
        this.studiosService = studiosService;
    }

    @GetMapping("/all")
    public List<Studios> getAllStudios() {
        return studiosService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Studios> getStudioById(@PathVariable Long id) {
        return studiosService.findById(id);
    }

    @PostMapping("/")
    public Studios createStudio(@RequestBody Studios studio) {
        return studiosService.save(studio);
    }

    @PutMapping("/{id}")
    public Studios updateStudio(@PathVariable Long id, @RequestBody Studios studio) {
        studio.setId(id);
        return studiosService.save(studio);
    }

    @DeleteMapping("/{id}")
    public void deleteStudio(@PathVariable Long id) {
        studiosService.deleteById(id);
    }
}
