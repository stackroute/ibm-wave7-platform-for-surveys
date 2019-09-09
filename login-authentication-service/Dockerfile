FROM openjdk:11
ADD  ./target/login-authentication-service-0.0.1-SNAPSHOT.jar /usr/src/login-authentication-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
ENTRYPOINT ["java","-jar", "login-authentication-service-0.0.1-SNAPSHOT.jar"]
