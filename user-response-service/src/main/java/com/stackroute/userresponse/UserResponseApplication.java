package com.stackroute.userresponse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class UserResponseApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserResponseApplication.class, args);
	}

}
