package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories(basePackages = "com.example.demo.repository")
public class AdminLoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdminLoginApplication.class, args);
	}

}
