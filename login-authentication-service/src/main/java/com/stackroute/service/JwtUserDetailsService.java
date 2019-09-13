package com.stackroute.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.stackroute.dao.UserDao;
import com.stackroute.model.DAOUser;
import com.stackroute.model.UserDTO;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.mail.internet.MimeMessage;

@Service
@CrossOrigin(origins = "*")
public class JwtUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserDao userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Autowired
	private JavaMailSender javaMailSender;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		DAOUser user = userDao.findByUsername(username);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
				new ArrayList<>());
	}
	
	public DAOUser save(UserDTO user) {
		DAOUser newUser = new DAOUser();
		newUser.setUsername(user.getUsername());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userDao.save(newUser);
	}
//	public String forgotPassword(String username) throws  javax.mail.MessagingException {
//		String status = "Failed";
//		System.out.println(username);
//		System.out.println(userDao.findByUsername(username));
//		System.out.println("abcd");
//		if (userDao.findByUsername(username) != null) {
//			System.out.println(username);
//			System.out.println("efgh");
//			MimeMessage message=javaMailSender.createMimeMessage();
//			MimeMessageHelper helper = new MimeMessageHelper(message, true);
//			helper.setTo("rdevi2850@gmail.com");
//			helper.setSubject("Link for Reset your Password");
//			helper.setText("http://localhost:4200/reset-password");
//			javaMailSender.send(message);
//			System.out.println("hello");
//			status = "Sent";
//		}
//		else {
//
//		}
//		return status;
//	}
//
//	//    @Override
//	public DAOUser update(UserDTO userDTO) throws Exception {
//		DAOUser user = userDao.findByUsername(userDTO.getUsername());
//		if (user != null) {
//			user.setPassword(bcryptEncoder.encode(userDTO.getPassword()));
//		}
//		return userDao.save(user);
//	}
}