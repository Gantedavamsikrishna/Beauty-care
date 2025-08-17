package com.example.demo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface productrepository extends MongoRepository<Product, Long> {
	List<Product> findByCatageroy(String category);

}
