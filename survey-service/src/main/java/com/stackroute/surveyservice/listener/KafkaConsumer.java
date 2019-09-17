package com.stackroute.surveyservice.listener;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.surveyservice.domain.Surveyor;
import com.stackroute.surveyservice.exceptions.SurveyorAlreadyExistException;
import com.stackroute.surveyservice.service.SurveyService;
import com.stackroute.surveyservice.service.SurveyorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;
@Service
public class KafkaConsumer
{
        private Surveyor surveyor;
        @Autowired
        private SurveyorService surveyorService;

        @KafkaListener(topics = "UserRegistration", groupId = "group_id1")
        public void consume(String surveyor) throws IOException, SurveyorAlreadyExistException {


           Surveyor obj = new ObjectMapper().readValue(surveyor, Surveyor.class);
            System.out.printf("-------------------------------------------"+surveyor);

            surveyorService.addSurveyor(obj);

        }

    }



