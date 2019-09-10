FROM openjdk:11

ADD ./target/eureka-server-1.0.0.jar /usr/src/eureka-server-1.0.0.jar

WORKDIR usr/src

EXPOSE 8761

ENTRYPOINT ["java","-jar", "eureka-server-1.0.0.jar"]