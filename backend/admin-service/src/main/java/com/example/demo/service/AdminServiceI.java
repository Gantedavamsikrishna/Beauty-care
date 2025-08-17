package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Admin;
@Service
public interface AdminServiceI {
List<Admin> getAlldata();

Admin saveadmin(Admin admin);

Admin getAdminById(Long id);

Admin updatebyid(Long id ,Admin admin);

String deleteAdmin(Long id);

boolean authenticateUser(String mail, String password);





}
