package com.alexandru_budau.springboot_server.services;

import com.alexandru_budau.springboot_server.models.Crew;
import com.alexandru_budau.springboot_server.repositories.CrewRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CrewService {

    private final CrewRepository crewRepository;

    public CrewService(CrewRepository crewRepository) {
        this.crewRepository = crewRepository;
    }

    public List<Crew> getAllCrew() {
        return crewRepository.findAll();
    }

    public Optional<Crew> findById(Long id) {
        return crewRepository.findById(id);
    }

    public Crew createCrew(Crew crew) {
        return crewRepository.save(crew);
    }

    public void deleteById(Long id) {
        crewRepository.deleteById(id);
    }
}
