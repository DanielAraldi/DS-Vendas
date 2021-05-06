package com.src.dsvendas.dto;

import java.io.Serializable;

import com.src.dsvendas.entities.Seller;

public class SellerDTO implements Serializable {

	/**
	Ensures that data can be converted to bytes, 
	ensuring that your object can be trafficked 
	over the network and downloaded to files
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
	public SellerDTO() {
	}

	public SellerDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	// Copy data Seller entity
	public SellerDTO(Seller entity) {
		id = entity.getId();
		name = entity.getName();
	}


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
