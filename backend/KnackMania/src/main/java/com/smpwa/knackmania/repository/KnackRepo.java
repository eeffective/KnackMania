package com.smpwa.knackmania.repository;

import com.smpwa.knackmania.entity.Knack;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface KnackRepo extends JpaRepository<Knack, Long> {
    Collection<Knack> findByStudy(String study);
}
