package com.example.demo;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface ProductService {
	
	List<Product> getAllproducts();
	
	Product saveproduct(Product product);
	
	Product getprbyid(Long id);
	
	Product updateproduct(Long id,Product product);
	
	void deleteproduct(Long id);

	List<Product> getProductsByCatageroy(String category);

}
