package com.smpwa.knackmania.controller;

import com.smpwa.knackmania.entity.Knack;
import com.smpwa.knackmania.service.KnackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping(path = "/api/knacks")
@CrossOrigin(origins = "http://localhost:8081")
public class KnackController {

    @Autowired
    private final KnackService service;

    public KnackController(KnackService service) {
        this.service = service;
    }

//    @GetMapping(path = "/study/{study}")
//    public ResponseEntity<Collection<Knack>> getByStudy(@PathVariable String study) {
//        try {
//            return new ResponseEntity(this.service.getByStudy(study), HttpStatus.BAD_REQUEST);
//        } catch (Exception ex) {
//            return new ResponseEntity(ex, HttpStatus.NOT_FOUND);
//        }
//    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Knack> get(@PathVariable Long id){
        try {
            return new ResponseEntity(this.service.getById(id).get(), HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
            return new ResponseEntity(ex, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping()
    public ResponseEntity<Collection<Knack>> get(){
        try {
            return new ResponseEntity(this.service.getAll(), HttpStatus.OK);
        }catch (Exception ex){
            ex.printStackTrace();
            return new ResponseEntity(ex, HttpStatus.NOT_FOUND);
        }
    }

}
