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
public class ResponseController {
    private ResponseEntity responseEntity;
    private ResponseService  responseService;
    @Autowired
    public ResponseController(ResponseService responseService){
        this.responseService=responseService;
    }
    @PostMapping("response/{randNum}")
    public ResponseEntity<?>  saveResponse(@RequestBody Response response){
        responseService.saveResponse(response);
        responseEntity=new ResponseEntity<String>("successfully created", HttpStatus.CREATED);
        return responseEntity;
    }
    //to get all the Responses
    @GetMapping("response")
    public ResponseEntity<?> getAllUsers(){
        return new ResponseEntity<List<Response>>(responseService.getAllResponses(),HttpStatus.OK);
    }
    @GetMapping("response/{id}")
    //handler to get a track by id
    public ResponseEntity<?> getTrack(@PathVariable String id) {
        try {
            return new ResponseEntity<>(responseService.getResponseById(id), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

}
