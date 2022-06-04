package com.konecta.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.konecta.dto.ProductDTO;
import com.konecta.entity.Product;
import com.konecta.repository.ProductRepository;
import com.konecta.service.ProductService;
@Service
public class ProductImpl implements ProductService{
	
	private ProductRepository productRepository;
	
	public ProductImpl(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	@Override
	public List<Product> findAll() {
		
		return productRepository.findAll();	
	}

	@Override
	public ProductDTO findById(Long id) throws ClassNotFoundException {
		
		Optional<Product> productEntity = productRepository.findById(id);
		
		if (productEntity.isEmpty()) {
			throw new ClassNotFoundException("There is not product with id '" + id + "' or cannot be recovered" );
		}
		
		ProductDTO productDTO = new ProductDTO();
		productDTO.setCategory(productEntity.get().getCategory());
		productDTO.setCreationDate(productEntity.get().getCreationDate());
		productDTO.setProductId(productEntity.get().getProductId());
		productDTO.setProductName(productEntity.get().getProductName());
		productDTO.setProductPrice(productEntity.get().getProductPrice());
		productDTO.setProductWeigth(productEntity.get().getProductWeigth());
		productDTO.setStock(productEntity.get().getStock());
		
		return productDTO;
	}

	@Override
	public ProductDTO save(ProductDTO product) {
		
		Product productEntity = new Product();
		productEntity.setCategory(product.getCategory());
		productEntity.setCreationDate(product.getCreationDate());
		productEntity.setProductId(product.getProductId());
		productEntity.setProductName(product.getProductName());
		productEntity.setProductPrice(product.getProductPrice());
		productEntity.setProductWeigth(product.getProductWeigth());
		productEntity.setStock(product.getStock());
		productEntity.setNumOfSold(product.getNumOfSold());
		
		Product savedProduct = productRepository.save(productEntity);		
		
		product.setProductId(savedProduct.getProductId());
		
		return product;
	}

	@Override
	public void deleteById(Long productId) {
		
		productRepository.deleteById(productId);
	}	
	
	@Override
	public List<Product> findProductWithSales(){
		return productRepository.findProductWithSales();
	}
}
