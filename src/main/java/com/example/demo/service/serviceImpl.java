package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Admin;
import com.example.demo.expections.AdminExistsException;
import com.example.demo.repository.Adminrepo;
@Service
public class serviceImpl implements AdminServiceI {
@Autowired
private Adminrepo adminrepo;
	
	@Override
	public List<Admin> getAlldata() {
		return adminrepo.findAll();
	}

	@Override
	public Admin saveadmin(Admin admin) {
		  if (adminrepo.findByMail(admin.getMail()) != null) {
			  throw new AdminExistsException("Username already exists");
	        }
		return adminrepo.save(admin);
	}

	@Override
	public Admin getAdminById(Long id) {
		return adminrepo.findById(id).orElseThrow();
	}

	@Override
	public Admin updatebyid(Long id, Admin admin) {
		return adminrepo.save(admin);
	}

	@Override
	public String deleteAdmin(Long id) {
		adminrepo.deleteById(id);	
		return "deleted";
	}

	@Override
	public boolean authenticateUser(String mail, String password) {
		 Admin admin = adminrepo.findByMail(mail);
	        return admin != null && admin.getPassword().equals(password);

	}
	

}
