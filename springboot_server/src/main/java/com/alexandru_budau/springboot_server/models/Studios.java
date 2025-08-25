package com.alexandru_budau.springboot_server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Studios {

    @Id
    private Long id;  // Movie ID

    private String studio;

    public Studios() {}

    public Studios(Long id, String studio) {
        this.id = id;
        this.studio = studio;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudio() {
        return studio;
    }

    public void setStudio(String studio) {
        this.studio = studio;
    }
}
