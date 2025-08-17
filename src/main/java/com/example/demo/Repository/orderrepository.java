package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Orders;

@Repository
public interface orderrepository extends MongoRepository<Orders, Long> {

	

}
