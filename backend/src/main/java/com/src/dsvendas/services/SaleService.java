package com.src.dsvendas.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.src.dsvendas.dto.SaleDTO;
import com.src.dsvendas.entities.Sale;
import com.src.dsvendas.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired // Add instance of new SaleRepository by the Framework
	private SaleRepository saleRepository;
	
	public Page<SaleDTO> findAll(Pageable pageable) {
		Page<Sale> sales = saleRepository.findAll(pageable); // Pageable will get a "page of data"
		// Sales pages already have the stream method 
		return sales.map(sale -> new SaleDTO(sale));
	}
}
