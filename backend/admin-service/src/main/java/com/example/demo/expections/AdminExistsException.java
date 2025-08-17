package com.example.demo.expections;

public class AdminExistsException extends RuntimeException {
	public AdminExistsException(String msg) {
		super(msg);
	}
	

}
