package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.example.demo.entity.Admin;
import com.example.demo.service.AdminServiceI;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:4200")
public class AdminApis {

	@Autowired
	private AdminServiceI admins;
	
	@PostMapping("/save")
	public Admin saveadmin(@RequestBody Admin admin) {
		
		return admins.saveadmin(admin);
	}
	@GetMapping("/data")
	public List<Admin> getData() {
		return admins.getAlldata();
	}
	@GetMapping("/data/{id}")
	public Admin getbyid(@PathVariable("id") Long id) {
		return admins.getAdminById(id);
	}
	@PutMapping("/update/{id}")
	public Admin putbyid(@PathVariable("id") Long id, @RequestBody Admin admin) {
		
		return admins.updatebyid(id, admin);
	}
	
	@DeleteMapping("/delete/{id}")
	public String dltbyid(@PathVariable("id") Long id) {
		admins.deleteAdmin(id);
		return "deleted";
	}
	
	  @PostMapping("/login")
	    public ResponseEntity<String> loginUser(@RequestBody Admin admin) {
	        boolean isAuthenticated = admins.authenticateUser(admin.getMail(), admin.getPassword());
	        if (isAuthenticated) {
	            return ResponseEntity.ok("Login successful");
	        } else {
	            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
	        }
	    }
	
}
