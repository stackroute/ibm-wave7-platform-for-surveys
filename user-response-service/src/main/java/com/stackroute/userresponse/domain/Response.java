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
    private String question_id;
    private String response;
    private String user_id;
    private String survey_id;

}