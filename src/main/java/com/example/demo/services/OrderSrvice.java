package com.example.demo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Orders;




@Service
public interface OrderSrvice {

List<Orders> getAllorders();
	
Orders saveorder(Orders orders);

Orders getOrderById(Long id);
	
Orders updateorder(Long id,Orders orders);
	
	void deleteorder(Long id);
}
