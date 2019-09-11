FROM openjdk:11
ADD ./target/user-registration-service-1.0.0.jar /usr/src/user-registration-service-1.0.0.jar
WORKDIR usr/src
EXPOSE 8095
ENTRYPOINT ["java","-jar", "user-registration-service-1.0.0.jar"]

