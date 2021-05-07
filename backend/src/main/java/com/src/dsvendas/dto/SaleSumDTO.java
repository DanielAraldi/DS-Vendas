package com.src.dsvendas.dto;

import java.io.Serializable;

import com.src.dsvendas.entities.Seller;

public class SaleSumDTO implements Serializable {
	
	/**
	Ensures that data can be converted to bytes, 
	ensuring that your object can be trafficked 
	over the network and downloaded to files
	 */
	private static final long serialVersionUID = 1L;

	private String sellerName;
	private Double sum;
	
	public SaleSumDTO() {
	}

	public SaleSumDTO(Seller sellerName, Double sum) {
		this.sellerName = sellerName.getName();
		this.sum = sum;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}
}
