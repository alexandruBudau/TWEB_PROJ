package com.alexandru_budau.springboot_server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "countries")
public class Countries {
    @Id
    private String id;
    private String country;

    public Countries() {}

    public Countries(String id, String country) {
        this.id = id;
        this.country = country;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }
}
