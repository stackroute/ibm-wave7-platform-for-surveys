FROM openjdk:11
ADD  ./target/login-authentication-service-0.0.1-SNAPSHOT.jar /usr/src/login-authentication-service-0.0.1-SNAPSHOT.jar
WORKDIR usr/src
EXPOSE 8090
ENTRYPOINT ["java","-jar", "login-authentication-service-0.0.1-SNAPSHOT.jar"]
