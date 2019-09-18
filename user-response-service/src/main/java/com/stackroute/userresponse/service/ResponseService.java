package com.stackroute.userresponse.service;

import com.stackroute.userresponse.domain.Response;

import java.util.List;

public interface ResponseService {
    public Response saveResponse(Response response);

    public List<Response> saveResponseList(List<Response> responseList);

    public List<Response> getAllResponses();

}
