package com.src.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.src.dsvendas.dto.SaleSumDTO;
import com.src.dsvendas.entities.Sale;

// Must inform type entity and type ID
public interface SaleRepository extends JpaRepository<Sale, Long> {
	
	@Query("SELECT new com.src.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ " FROM Sale AS obj "
			+ " GROUP BY obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
}
