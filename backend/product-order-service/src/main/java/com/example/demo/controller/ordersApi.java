package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Orders;
import com.example.demo.services.OrderSrvice;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/order")
public class ordersApi {
	
	@Autowired
	private OrderSrvice oservice;
	
	@PostMapping("/save")
	public Orders saveorder(@RequestBody Orders Order) {
		return oservice.saveorder(Order);
	}
	
	@GetMapping("/data")
	public List<Orders> getAllOrders(@RequestBody Orders order) {
		return oservice.getAllorders();
	}
	@GetMapping("/data/{id}")
	public Orders getbyid(@PathVariable Long id) {
		return oservice.getOrderById(id);
				
	}
	@PutMapping("order/{id}")
	public Orders getorderbyid(@PathVariable("id") Long id, @RequestBody Orders order) {
		
		return oservice.updateorder(id, order);
	}
	
	@DeleteMapping("/delete/{id}")
public String deleteorderby(@PathVariable("id") Long id) {
		oservice.deleteorder(id);
		return "delete successfully id no:"+id;
		}
}
