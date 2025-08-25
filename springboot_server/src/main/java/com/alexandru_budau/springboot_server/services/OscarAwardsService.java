package com.alexandru_budau.springboot_server.services;

import com.alexandru_budau.springboot_server.models.OscarAwards;
import com.alexandru_budau.springboot_server.repositories.OscarAwardsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OscarAwardsService {

    private final OscarAwardsRepository oscarAwardsRepository;

    public OscarAwardsService(OscarAwardsRepository oscarAwardsRepository) {
        this.oscarAwardsRepository = oscarAwardsRepository;
    }

    public List<OscarAwards> getAllOscarAwards() {
        return oscarAwardsRepository.findAll();
    }

    public OscarAwards createOscarAward(OscarAwards oscarAward) {
        return oscarAwardsRepository.save(oscarAward);
    }
}
