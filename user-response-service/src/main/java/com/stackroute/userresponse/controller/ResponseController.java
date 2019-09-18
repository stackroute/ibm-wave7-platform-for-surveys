package com.stackroute.userresponse.controller;

import com.stackroute.userresponse.domain.Response;
import com.stackroute.userresponse.service.ResponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1")
@CrossOrigin(origins = "*")
public class ResponseController {
    private ResponseEntity responseEntity;
    private ResponseService  responseService;

    @Autowired
    public ResponseController(ResponseService responseService){
        this.responseService=responseService;
    }

    @PostMapping("response")
    public ResponseEntity<?>  saveResponse(@RequestBody Response response){
        Response savedResponse = responseService.saveResponse(response);
        return new ResponseEntity<Response>(savedResponse, HttpStatus.CREATED);
    }

    @PostMapping("responseList")
    public ResponseEntity<?>  saveResponseList(@RequestBody List<Response> responseList){
        List<Response> savedResponseList = responseService.saveResponseList(responseList);
        return new ResponseEntity<List<Response>>(savedResponseList, HttpStatus.CREATED);
    }

    //to get all the Responses
    @GetMapping("response")
    public ResponseEntity<?> getAllResponses(){
        return new ResponseEntity<List<Response>>(responseService.getAllResponses(),HttpStatus.OK);
    }
}
