package com.alexandru_budau.springboot_server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "languages")
public class Languages {
    @Id
    private long id;
    private String type;
    private String language;

    public Languages(long id, String type, String language) {
        this.id = id;
        this.type = type;
        this.language = language;
    }
    public Languages() {}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }
}