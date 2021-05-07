package com.src.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.src.dsvendas.dto.SaleDTO;
import com.src.dsvendas.dto.SaleSuccessDTO;
import com.src.dsvendas.dto.SaleSumDTO;
import com.src.dsvendas.services.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleController {

	@Autowired
	private SaleService saleService;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
		Page<SaleDTO> salesDTO = saleService.findAll(pageable);
		return ResponseEntity.ok(salesDTO);
	}
	
	@GetMapping(value = "/amount-by-seller")
	public ResponseEntity<List<SaleSumDTO>> amountGruopedBySeller() {
		List<SaleSumDTO> salesSumDTO = saleService.amountGruopedBySeller();
		return ResponseEntity.ok(salesSumDTO);
	}
	
	@GetMapping(value = "/success-by-seller")
	public ResponseEntity<List<SaleSuccessDTO>> successGruopedBySeller() {
		List<SaleSuccessDTO> salesSuccessDTO = saleService.successGruopedBySeller();
		return ResponseEntity.ok(salesSuccessDTO);
	}
}
