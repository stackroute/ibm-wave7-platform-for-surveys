FROM openjdk:11

ADD ./target/zuul-api-1.0.0-SNAPSHOT.jar /usr/src/zuul-api-1.0.0-SNAPSHOT.jar

WORKDIR usr/src

EXPOSE 8080

ENTRYPOINT ["java","-jar", "zuul-api-1.0.0-SNAPSHOT.jar"]