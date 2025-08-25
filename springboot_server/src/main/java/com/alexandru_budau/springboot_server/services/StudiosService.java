package com.alexandru_budau.springboot_server.services;

import com.alexandru_budau.springboot_server.models.Studios;
import com.alexandru_budau.springboot_server.repositories.StudiosRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudiosService {

    private final StudiosRepository studiosRepository;

    public StudiosService(StudiosRepository studiosRepository) {
        this.studiosRepository = studiosRepository;
    }

    public List<Studios> findAll() {
        return studiosRepository.findAll();
    }

    public Optional<Studios> findById(Long id) {
        return studiosRepository.findById(id);
    }

    public Studios save(Studios studio) {
        return studiosRepository.save(studio);
    }

    public void deleteById(Long id) {
        studiosRepository.deleteById(id);
    }
}
