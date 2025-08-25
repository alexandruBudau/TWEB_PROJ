package com.alexandru_budau.springboot_server.controllers;

import com.alexandru_budau.springboot_server.models.OscarAwards;
import com.alexandru_budau.springboot_server.services.OscarAwardsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/the_oscar_awards")
public class OscarAwardsController {

    @Autowired
    private OscarAwardsService oscarAwardsService;

    @GetMapping
    public List<OscarAwards> getAllOscarAwards() {
        return oscarAwardsService.getAllOscarAwards();
    }

    @PostMapping
    public OscarAwards createOscarAward(@RequestBody OscarAwards award) {
        return oscarAwardsService.createOscarAward(award);
    }
}
