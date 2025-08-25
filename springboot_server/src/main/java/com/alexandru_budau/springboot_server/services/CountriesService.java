package com.alexandru_budau.springboot_server.services;

import com.alexandru_budau.springboot_server.models.Countries;
import com.alexandru_budau.springboot_server.repositories.CountriesRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountriesService {

    private final CountriesRepository countriesRepository;

    public CountriesService(CountriesRepository countriesRepository) {
        this.countriesRepository = countriesRepository;
    }

    public List<Countries> getAllCountries() {
        return countriesRepository.findAll();
    }

    public Optional<Countries> findById(Long id) {
        return countriesRepository.findById(id);
    }

    public Countries createCountry(Countries country) {
        return countriesRepository.save(country);
    }

    public void deleteById(Long id) {
        countriesRepository.deleteById(id);
    }
}
