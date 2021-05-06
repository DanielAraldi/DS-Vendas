package com.src.dsvendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.src.dsvendas.entities.Seller;

// Must inform type entity and type ID
public interface SellerRepository extends JpaRepository<Seller, Long> {
}
