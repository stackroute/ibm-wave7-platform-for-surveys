FROM openjdk:11
ADD ./target/mail-service-1.0.0.jar usr/src/mail-service-1.0.0.jar
EXPOSE 8070
WORKDIR usr/src
ENTRYPOINT ["java","-jar","mail-service-1.0.0.jar"]