package com.stackroute.userregistration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

//Run the spring boot application
@SpringBootApplication
//@EnableEurekaClient
//@EnableDiscoveryClient
public class UserRegistrationApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserRegistrationApplication.class, args);
	}

}
