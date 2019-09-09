FROM openjdk:11
ADD ./target/user-response-service-0.0.1-SNAPSHOT.jar /usr/src/user-response-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
EXPOSE 8082
ENTRYPOINT ["java","-jar", "user-response-service-0.0.1-SNAPSHOT.jar"]
