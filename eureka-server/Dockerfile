FROM openjdk:11

ADD ./target/eureka-server-1.0.0-SNAPSHOT.jar /usr/src/eureka-server-1.0.0-SNAPSHOT.jar

WORKDIR usr/src

EXPOSE 8761

ENTRYPOINT ["java","-jar", "eureka-server-1.0.0-SNAPSHOT.jar"]