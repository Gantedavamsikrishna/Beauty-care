package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.expection.productexpection;
@Service
public class Serviceimpl implements ProductService {
	
	@Autowired
	private productrepository prepo;

	@Override
	public List<Product> getAllproducts() {
		
		return prepo.findAll();
	}

	@Override
	public Product saveproduct(Product product) {
		return prepo.save(product);
	}

	@Override
	public Product getprbyid(Long id) {
		return prepo.findById(id).orElseThrow(()->new productexpection("product not found with id"+id));
	}

	@Override
	public Product updateproduct(Long pid, Product product) {
		return prepo.save(product);
	}

	@Override
	public void deleteproduct(Long pid) {
prepo.deleteById(pid);
	}
	
	public List<Product> getProductsByCatageroy(String catageroy) {
	    return prepo.findByCatageroy(catageroy);
	}




}
