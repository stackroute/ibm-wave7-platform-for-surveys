package com.stackroute.userresponse.service;

import com.stackroute.userresponse.domain.Response;

import java.util.List;

public interface ResponseService {
    public Response saveResponse(Response response);

    public List<Response> getAllResponses();

    public Response getResponseById(String question_id);
}
