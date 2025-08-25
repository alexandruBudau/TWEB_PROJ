package com.alexandru_budau.springboot_server.controllers;

import com.alexandru_budau.springboot_server.models.Actors;
import com.alexandru_budau.springboot_server.services.ActorsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/actors")
public class ActorsController {

    @Autowired
    private ActorsService actorsService;

    @GetMapping
    public List<Actors> getAllActors() {
        return actorsService.getAllActors();
    }

    @PostMapping
    public Actors createActor(@RequestBody Actors actor) {
        return actorsService.createActor(actor);
    }
}
