package com.alexandru_budau.springboot_server.controllers;

import com.alexandru_budau.springboot_server.models.Countries;
import com.alexandru_budau.springboot_server.services.CountriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/countries")
public class CountriesController {

    @Autowired
    private CountriesService countriesService;

    @GetMapping
    public List<Countries> getAllCountries() {
        return countriesService.getAllCountries();
    }

    @PostMapping
    public Countries createCountry(@RequestBody Countries country) {
        return countriesService.createCountry(country);
    }
}
