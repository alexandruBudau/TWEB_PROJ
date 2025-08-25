package com.alexandru_budau.springboot_server.services;

import com.alexandru_budau.springboot_server.models.Posters;
import com.alexandru_budau.springboot_server.repositories.PostersRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostersService {

    private final PostersRepository postersRepository;

    public PostersService(PostersRepository postersRepository) {
        this.postersRepository = postersRepository;
    }

    public List<Posters> findAll() {
        return postersRepository.findAll();
    }

    public Optional<Posters> findById(Long id) {
        return postersRepository.findById(id);
    }

    public Posters save(Posters poster) {
        return postersRepository.save(poster);
    }

    public void deleteById(Long id) {
        postersRepository.deleteById(id);
    }
}
