package com.example.demo.services;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.entity.Product;




@FeignClient(name = "product-service", url = "https://products-api-44eo.onrender.com/product") 
public interface ProductServiceClient {
	 @GetMapping("/get/{id}")
    Product getProductById(@PathVariable("id") Long id);
}
