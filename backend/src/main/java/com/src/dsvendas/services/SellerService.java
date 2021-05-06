package com.src.dsvendas.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.src.dsvendas.dto.SellerDTO;
import com.src.dsvendas.entities.Seller;
import com.src.dsvendas.repositories.SellerRepository;

@Service
public class SellerService {

	
	@Autowired // Add instance of new SellerRepository by the Framework
	private SellerRepository sellerRepository;
	
	public List<SellerDTO> findAll() {
		List<Seller> sellersDTO = sellerRepository.findAll();
		// Return object SellerrDTO converts to SellerDTO list 
		return sellersDTO.stream().map(sellerDTO -> new SellerDTO(sellerDTO)).collect(Collectors.toList());
	}
}
