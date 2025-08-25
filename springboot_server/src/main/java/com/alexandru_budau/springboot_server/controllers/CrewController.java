package com.alexandru_budau.springboot_server.controllers;

import com.alexandru_budau.springboot_server.models.Crew;
import com.alexandru_budau.springboot_server.services.CrewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/crew")
public class CrewController {

    @Autowired
    private CrewService crewService;

    @GetMapping
    public List<Crew> getAllCrew() {
        return crewService.getAllCrew();
    }

    @PostMapping
    public Crew createCrew(@RequestBody Crew crew) {
        return crewService.createCrew(crew);
    }
}
