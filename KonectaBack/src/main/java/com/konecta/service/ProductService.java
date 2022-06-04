package com.konecta.service;

import java.util.List;
import java.util.Optional;

import com.konecta.dto.ProductDTO;
import com.konecta.entity.Product;

public interface ProductService {
	
	public List<Product> findAll();
	
	public ProductDTO findById(Long id) throws ClassNotFoundException;
	
	public ProductDTO save(ProductDTO product);
	
	public void deleteById(Long productId);
	
	public List<Product> findProductWithSales();
}