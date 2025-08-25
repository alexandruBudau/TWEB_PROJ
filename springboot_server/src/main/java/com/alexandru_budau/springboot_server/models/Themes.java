package com.alexandru_budau.springboot_server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "themes")
public class Themes {
    @Id
    private Long id;
    private String theme;

    public Themes() {}

    public Themes(Long id, String theme) {
        this.id = id;
        this.theme = theme;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTheme() { return theme; }
    public void setTheme(String theme) { this.theme = theme; }
}
