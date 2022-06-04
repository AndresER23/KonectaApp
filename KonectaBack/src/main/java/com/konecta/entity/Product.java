package com.konecta.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="products")
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="product_id")
	private Long productId;
	
	@Column(name="product_name")
	private String productName;
	
	@Column(name="product_price")
	private int productPrice;
	
	@Column(name="product_weigth")
	private int productWeigth;
	
	@Column(name="product_category")
	private String category;
	
	@Column(name="product_stock")
	private int stock;
	
	@Column(name="creation_date")
	private Date creationDate;
	
	@Column(name="NumOfSold")
	private int numOfSold;
}
