package com.alexandru_budau.springboot_server.controllers;

import com.alexandru_budau.springboot_server.models.Languages;
import com.alexandru_budau.springboot_server.services.LanguagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/languages")
public class LanguagesController {

    @Autowired
    private LanguagesService languagesService;

    @GetMapping
    public List<Languages> getAllLanguages() {
        return languagesService.getAllLanguages();
    }

    @PostMapping
    public Languages createLanguage(@RequestBody Languages language) {
        return languagesService.createLanguage(language);
    }
}
