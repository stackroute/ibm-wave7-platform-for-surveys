FROM openjdk:11
ADD  ./target/survey-service-1.0.0.jar /usr/src/survey-service-1.0.0.jar
WORKDIR usr/src
EXPOSE 8090
ENTRYPOINT ["java","-jar", "survey-service-1.0.0.jar"]
