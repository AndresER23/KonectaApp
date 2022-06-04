package com.konecta.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDTO {
	
	private Long productId;
	private String productName;
	private int productPrice;
	private int productWeigth;
	private String category;
	private int stock;
	private Date creationDate;
	private int numOfSold;
}
