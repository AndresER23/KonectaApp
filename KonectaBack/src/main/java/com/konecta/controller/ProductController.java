package com.konecta.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.konecta.dto.ProductDTO;
import com.konecta.entity.Product;
import com.konecta.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {
	
	private ProductService productService;
	
	public ProductController(ProductService productService) {
		this.productService = productService;
	}
	
	
	@PostMapping
	public ResponseEntity<ProductDTO> create(@RequestBody ProductDTO product){
		
		return ResponseEntity.ok(productService.save(product));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<ProductDTO> update(@RequestBody ProductDTO product, @PathVariable(value="id") Long productId ){
		
		product.setProductId(productId);
		
		return ResponseEntity.ok(productService.save(product)); 
	}

	@GetMapping
	public ResponseEntity<List<Product>> readAll(){
		return ResponseEntity.ok(productService.findAll());
	}	
	
	@GetMapping("/sales")
	public ResponseEntity<List<Product>> sales(){
		return ResponseEntity.ok(productService.findProductWithSales());
	}	
	
	@GetMapping("/{id}")
	public ResponseEntity<ProductDTO> read(@PathVariable(value="id") Long productId){
		ProductDTO recoveredDTO;
		try {
			recoveredDTO= productService.findById(productId);
		} catch (ClassNotFoundException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		return ResponseEntity.ok(recoveredDTO);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable(value="id") Long productId){
		productService.deleteById(productId);
		return ResponseEntity.status(HttpStatus.OK).build();
	}
}
