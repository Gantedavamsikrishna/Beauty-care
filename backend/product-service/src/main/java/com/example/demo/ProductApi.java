package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/product")
@CrossOrigin("http://localhost:4200")

public class ProductApi {
	
	@Autowired
	private ProductService pservice;
	
	@PostMapping("/save")
	public Product addproduct(@RequestBody Product product) {
		
		return pservice.saveproduct(product);
	}

	@GetMapping("/get/{id}")
	public Product getpbyid(@PathVariable("id") Long id) {
		return pservice.getprbyid(id);
	}
	@GetMapping("/data")
	public List<Product> getalldata() {
		return pservice.getAllproducts() ;
	}
	
	@GetMapping("/get")
	public List<Product> getproduct(@RequestParam(required = false) String catageroy) {
	    if (catageroy != null) {
	        return pservice.getProductsByCatageroy(catageroy);
	    } else {
	        return pservice.getAllproducts();
	    }
	}

	
	@PutMapping("edit/{id}")
	public Product updatepr(@PathVariable("id") Long id, @RequestBody Product product) {
		
		return pservice.updateproduct(id, product);
	}
	
	@DeleteMapping("/delete/{id}")
	
	public String deletep(@PathVariable("id") Long id) {
		pservice.deleteproduct(id);
		return "deleted succesfully";
	}
	
	

}
