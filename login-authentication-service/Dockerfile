FROM openjdk:11
ADD  ./target/login-authentication-service-1.0.0.jar /usr/src/login-authentication-service-1.0.0.jar
WORKDIR usr/src
EXPOSE 8085
ENTRYPOINT ["java","-jar", "login-authentication-service-1.0.0.jar"]
