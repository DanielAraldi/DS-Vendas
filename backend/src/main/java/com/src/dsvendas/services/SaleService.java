package com.src.dsvendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.src.dsvendas.dto.SaleDTO;
import com.src.dsvendas.dto.SaleSuccessDTO;
import com.src.dsvendas.dto.SaleSumDTO;
import com.src.dsvendas.entities.Sale;
import com.src.dsvendas.repositories.SaleRepository;
import com.src.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired // Add instance of new SaleRepository by the Framework
	private SaleRepository saleRepository;
	
	@Autowired // Add instance of new SellerRepository by the Framework
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true) // Ensures that the Service queries the bank without logging scritps
	public Page<SaleDTO> findAll(Pageable pageable) {
		sellerRepository.findAll(); // Make a query of sellers and store in memory
		Page<Sale> sales = saleRepository.findAll(pageable); // Pageable will get a "page of data"
		// Sales pages already have the stream method 
		return sales.map(sale -> new SaleDTO(sale));
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGruopedBySeller() {
		return saleRepository.amountGroupedBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGruopedBySeller() {
		return saleRepository.successGroupedBySeller();
	}
}
