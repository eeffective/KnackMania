package com.smpwa.knackmania.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "id")
    private Long id;
    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @JsonManagedReference
    @ManyToMany(cascade = CascadeType.REMOVE)
    @JoinTable(name = "saved_knacks", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "knack_id"))
    private Set<Knack> savedKnacks = new HashSet<>();

    public Long getId() {
        return id;
    }

    public Set<Knack> getSavedKnacks() {
        return savedKnacks;
    }

    public void setSavedKnacks(Set<Knack> savedKnacks) {
        this.savedKnacks = savedKnacks;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
