package com.src.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.src.dsvendas.entities.Sale;

// Must inform type entity and type ID
public interface SaleRepository extends JpaRepository<Sale, Long> {
}
