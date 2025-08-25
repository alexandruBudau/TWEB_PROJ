package com.alexandru_budau.springboot_server.services;

import com.alexandru_budau.springboot_server.models.Languages;
import com.alexandru_budau.springboot_server.repositories.LanguagesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LanguagesService {

    private final LanguagesRepository languagesRepository;

    public LanguagesService(LanguagesRepository languagesRepository) {
        this.languagesRepository = languagesRepository;
    }

    public List<Languages> getAllLanguages() {
        return languagesRepository.findAll();
    }

    public Languages createLanguage(Languages language) {
        return languagesRepository.save(language);
    }
}
