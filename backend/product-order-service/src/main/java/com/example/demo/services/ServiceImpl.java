
package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Exceptions.orderexpection;
import com.example.demo.Repository.orderrepository;
import com.example.demo.entity.Orders;
import com.example.demo.entity.Product;

@Service
public class ServiceImpl implements OrderSrvice {
	@Autowired
	private orderrepository orepo;
	
	  @Autowired
	    private ProductServiceClient productServiceClient;
	
	@Override
	
	public List<Orders> getAllorders() {
		
		return orepo.findAll() ;
	}

	@Override
	public Orders saveorder(Orders order) {
		  Product product = productServiceClient.getProductById(order.getProductId());
	        if (product == null) {
	            throw new orderexpection("Product not found");
	        }
	        order.setPname(product.getPname());
//	        order.setPrice(product.getPrice());
	        order.setProductId(product.getProductid());
	     
		
		return orepo.save(order) ;
	}

	 

	@Override
	public Orders updateorder(Long id, Orders orders) {
		
		return orepo.save(orders);
	}

	@Override
	public void deleteorder(Long id) {
    orepo.deleteById(id);		
	}

	@Override
	public Orders getOrderById(Long id) {
		return orepo.findById(id).orElseThrow();
	}

}
