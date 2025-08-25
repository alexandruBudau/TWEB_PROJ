package com.alexandru_budau.springboot_server.controllers;

import com.alexandru_budau.springboot_server.models.Themes;
import com.alexandru_budau.springboot_server.services.ThemesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/themes")
public class ThemesController {

    @Autowired
    private ThemesService themesService;

    @GetMapping
    public List<Themes> getAllThemes() {
        return themesService.getAllThemes();
    }

    @PostMapping
    public Themes createTheme(@RequestBody Themes theme) {
        return themesService.createTheme(theme);
    }
}
