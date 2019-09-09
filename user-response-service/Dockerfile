FROM openjdk:11
ADD ./target/user-response-service-1.0.0.jar /usr/src/user-response-service-1.0.0.jar
WORKDIR usr/src
EXPOSE 8082
ENTRYPOINT ["java","-jar", "user-response-service-1.0.0.jar"]
