package com.smpwa.knackmania.service;

import com.smpwa.knackmania.entity.Knack;
import com.smpwa.knackmania.repository.KnackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class KnackService {

    @Autowired
    private final KnackRepo repo;

    public KnackService(KnackRepo repo) {
        this.repo = repo;
    }

    public Collection<Knack> getByStudy(String study) {
        try {
            return this.repo.findByStudy(study);
        } catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }
    }

    public Optional<Knack> getById(Long id) {
        try {
            return this.repo.findById(id);
        } catch (Exception ex) {
            ex.printStackTrace();
            throw ex;
        }
    }
}
