package com.smpwa.knackmania.service;

import com.smpwa.knackmania.entity.User;
import com.smpwa.knackmania.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private final UserRepo repo;

    public UserService(UserRepo repo) {
        this.repo = repo;
    }

    public Optional<User> getById(Long id) {
        try {
            return this.repo.findById(id);
        } catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }
    }

    public void save(User user) {
        try {
            this.repo.save(user);
        } catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }
    }
}
