package com.stackroute.userregistration.domain;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
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
}
