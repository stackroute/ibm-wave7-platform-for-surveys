package com.stackroute.userregistration.domain;


import lombok.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
//creates the user document in the mongo database
@Document(collection="user")
//Using lombok creating all the setter and getter methods
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Configuration
@Getter
@Setter
public class User {
    //It is the id of the user
    @Id
    //It generates the id automatically
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;
    private String name;
    private String email;
    private String password;
    private String role;
    private String location;
    private String ageGroup;
    private String gender;
    private int rewardPoints;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public User(String id, String name, String email, String password, String role, String location, String ageGroup, String gender) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.location = location;
        this.ageGroup = ageGroup;
        this.gender = gender;
    }


}
