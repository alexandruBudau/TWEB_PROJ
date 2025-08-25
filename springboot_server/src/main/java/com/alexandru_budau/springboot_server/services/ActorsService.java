package com.alexandru_budau.springboot_server.services;

import com.alexandru_budau.springboot_server.models.Actors;
import com.alexandru_budau.springboot_server.repositories.ActorsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActorsService {

    private final ActorsRepository actorsRepository;

    public ActorsService(ActorsRepository actorsRepository) {
        this.actorsRepository = actorsRepository;
    }

    public List<Actors> getAllActors() {
        return actorsRepository.findAll();
    }

    public Actors createActor(Actors actor) {
        return actorsRepository.save(actor);
    }

    public Optional<Actors> findById(Long id) {
        return actorsRepository.findById(id);
    }

    public void deleteById(Long id) {
        actorsRepository.deleteById(id);
    }
}
