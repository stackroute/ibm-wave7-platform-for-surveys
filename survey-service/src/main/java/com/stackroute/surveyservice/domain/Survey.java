package com.stackroute.surveyservice.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "survey")
public class Survey {
    @Id
    private String id;

    private String name;

    private String description;

    private String domain_type;




//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public String getDescription() {
//        return description;
//    }
//
//    public void setDescription(String description) {
//        this.description = description;
//    }
//
//    public String getDomain_type() {
//        return domain_type;
//    }
//
//    public void setDomain_type(String domain_type) {
//        this.domain_type = domain_type;
//    }
//
//    public String getSubdomain_type() {
//        return subdomain_type;
//    }
//
//    public void setSubdomain_type(String subdomain_type) {
//        this.subdomain_type = subdomain_type;
//    }
//
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    @Override
//    public String toString() {
//        return "Survey{" +
//                "name='" + name + '\'' +
//                ", description='" + description + '\'' +
//                ", domain_type='" + domain_type + '\'' +
//                ", subdomain_type='" + subdomain_type + '\'' +
//                ", id=" + id +
//                '}';
//    }
}
