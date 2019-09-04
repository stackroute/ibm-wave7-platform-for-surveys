package com.stackroute.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "user")
@JsonIgnoreProperties(ignoreUnknown = true)
public class DAOUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;


	@Column
	@JsonProperty("id")
	private long sign_id;
	@Column
	@JsonProperty("name")
	private String username;
	@Column
	@JsonIgnore
	@JsonProperty("password")
	private String password;

	@Column
	@JsonIgnore
	@JsonProperty("role")
	private String role;
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	public long getSign_id() {
		return sign_id;
	}

	public void setSign_id(int sign_id) {
		this.sign_id = sign_id;
	}
}