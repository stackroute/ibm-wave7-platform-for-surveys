FROM openjdk:11
ADD  ./target/survey-service-0.0.1-SNAPSHOT.jar /usr/src/survey-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
EXPOSE 8090
ENTRYPOINT ["java","-jar", "survey-service-0.0.1-SNAPSHOT.jar"]
