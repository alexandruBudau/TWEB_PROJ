package com.alexandru_budau.springboot_server.services;

import com.alexandru_budau.springboot_server.models.Themes;
import com.alexandru_budau.springboot_server.repositories.ThemesRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ThemesService {

    private final ThemesRepository themesRepository;

    public ThemesService(ThemesRepository themesRepository) {
        this.themesRepository = themesRepository;
    }

    public List<Themes> getAllThemes() {
        return themesRepository.findAll();
    }

    public Themes createTheme(Themes theme) {
        return themesRepository.save(theme);
    }
}
