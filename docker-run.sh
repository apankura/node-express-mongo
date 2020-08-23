docker image rm apankura/java-spring-gradle-one-db2-db2
docker pull apankura/java-spring-gradle-one-db2-db2:latest

docker image rm apankura/java-spring-gradle-one-db2-spring
docker pull apankura/java-spring-gradle-one-db2-spring

docker run -itd --rm --name db2 --privileged=true -p 50000:50000 -e LICENSE=accept -e DB2INST1_PASSWORD=admin123 -e DBNAME=sutdb apankura/java-spring-gradle-one-db2-db2
sleep 10
docker run -itd --rm --name spring -p 46801:46801 -e SPRING_PROFILES_ACTIVE=docker -e DB2_HOST=192.168.0.14 apankura/java-spring-gradle-one-db2-spring
sleep 10