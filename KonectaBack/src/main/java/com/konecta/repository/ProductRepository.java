package com.konecta.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.konecta.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	@Query(value="SELECT max(product_stock),product_name,product_id FROM products_konecta.products limit 1", nativeQuery=true)
	Object findMaxStock();
	
	@Query(value="SELECT max(num_of_sold),product_name,product_id FROM products_konecta.products limit 1", nativeQuery=true)
	Object findMaxSales();
	
	@Query("SELECT p FROM Product p WHERE p.numOfSold>0")
	List<Product> findProductWithSales();

}
