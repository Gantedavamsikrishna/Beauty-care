package com.example.demo.entity;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import jakarta.annotation.Generated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Document
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Orders {
	
	
	@MongoId
	private Long orderid;
	private Long productId;
	private String pname;
	private int quantity;
	private String pincode;
	private String phnumber;
	private String  address;
	private String payment_type;
    private double price;
   
}
