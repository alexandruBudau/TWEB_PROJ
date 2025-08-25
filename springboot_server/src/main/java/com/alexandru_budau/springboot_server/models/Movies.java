package com.alexandru_budau.springboot_server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "movies")
public class Movies {

    @Id
    private Long id;

    private String name;

    private Integer date;

    private String tagline;

    @Column(length = 2000)
    private String description;

    private Integer minute;

    private Double rating;

    public Movies() {}

    public Movies(Long id, String name, Integer date, String tagline, String description, Integer minute, Double rating) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.tagline = tagline;
        this.description = description;
        this.minute = minute;
        this.rating = rating;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Integer getDate() { return date; }
    public void setDate(Integer date) { this.date = date; }

    public String getTagline() { return tagline; }
    public void setTagline(String tagline) { this.tagline = tagline; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Integer getMinute() { return minute; }
    public void setMinute(Integer minute) { this.minute = minute; }

    public Double getRating() { return rating; }
    public void setRating(Double rating) { this.rating = rating; }
}
