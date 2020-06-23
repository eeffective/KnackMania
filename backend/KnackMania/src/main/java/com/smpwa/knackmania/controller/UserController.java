package com.smpwa.knackmania.controller;

import com.smpwa.knackmania.entity.User;
import com.smpwa.knackmania.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "*", maxAge = 360)
@RequestMapping(path = "api/users")
public class UserController {

    @Autowired
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<User> get(@PathVariable Long id) {
        try {
            return new ResponseEntity(this.service.getById(id), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity(ex, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<User> update(@RequestBody User newUser, @PathVariable Long id) {
        return service.getById(id)
                .map(user -> {
                    user = newUser;
                    service.save(user);
                    return new ResponseEntity<>(user, HttpStatus.OK);
                })
                .orElseGet(() -> {
                    newUser.setId(id);
                    service.save(newUser);
                    return new ResponseEntity<>(newUser, HttpStatus.ACCEPTED);
                });
    }

}
