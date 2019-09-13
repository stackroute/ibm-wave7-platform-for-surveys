package com.stackroute.userresponse.domain;

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
@Document
public class Response {

    @Id
    private String response_id;
    private String question_id;
    private String response;
    private String email;
    private String survey_id;
    private int randomNum;

    public Response(String question_id, String response, String email, String survey_id) {
        this.question_id = question_id;
        this.response = response;
        this.email = email;
        this.survey_id = survey_id;
    }
}