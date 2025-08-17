package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Admin;
@Repository
public interface Adminrepo extends MongoRepository<Admin, Long> {

	Admin findByMail(String mail);
	



}
