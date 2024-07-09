CREATE DATABASE  IF NOT EXISTS `joblistingdb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `joblistingdb`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: joblistingdb
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `email` varchar(25) NOT NULL,
  `password` varchar(25) DEFAULT NULL,
  `admin_name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('abc@mail.com','abc','abc'),('vish@mail.com','vish','vish');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `career`
--

DROP TABLE IF EXISTS `career`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `career` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `location` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `description` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci,
  `salary` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `experience` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1013 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `career`
--

LOCK TABLES `career` WRITE;
/*!40000 ALTER TABLE `career` DISABLE KEYS */;
INSERT INTO `career` VALUES (1001,'Software Engineer','Bengaluru, Karnataka','We are seeking a highly motivated software engineer to join our dynamic team. The ideal candidate should have experience in [Programming Languages/Frameworks], with a passion for problem-solving and innovation.','Rs. 7,00,000 - 11,00,000','1-2 Years'),(1002,'Marketing Coordinator','Bengaluru, Karnataka','Are you a creative thinker with a knack for digital marketing? Join our marketing team and play a key role in developing and executing strategic campaigns to drive brand awareness and engagement.','Rs. 4,00,000 - 5,50,000','3-4 Years'),(1003,'Sales Associate','Bengaluru, Karnataka','We are looking for enthusiastic individuals with excellent communication skills to join our sales team. As a sales associate, you will be responsible for building and maintaining client relationships while achieving sales targets.','Rs. 4,00,000 - 5,00,000','1-2 Years'),(1004,'DevOps Engineer','Bengaluru, Karnataka',' We are seeking a talented DevOps engineer to streamline our development and operations processes. Responsibilities include automating deployment pipelines, managing infrastructure as code, and ensuring the reliability and scalability of our systems.','Rs. 5,00,000 - 7,00,000','1-3 Years'),(1005,'Full Stack Developer','Bengaluru, Karnataka','  We are looking for a versatile full stack developer to join our engineering team. The ideal candidate should have experience with both front-end and back-end technologies, including JavaScript, Node.js, React, and SQL databases.','Rs. 10,00,000 - 11,00,000','5-7 Years'),(1006,'Machine Learning Engineer','Bengaluru, Karnataka',' Join our machine learning team and work on cutting-edge AI projects. Responsibilities include developing and deploying machine learning models, analyzing data, and optimizing algorithms for performance and scalability.','Rs. 7,00,000 - 9,00,000','4-5 Years'),(1007,'Systems Engineer','Bengaluru, Karnataka','We are looking for a systems engineer to design, implement, and maintain our IT infrastructure. Responsibilities include managing servers, networks, and storage systems, as well as troubleshooting system issues and ensuring uptime.','Rs. 5,00,000 - 7,00,000','0-2 Years'),(1008,'QA Automation Engineer','Bengaluru, Karnataka','We are seeking a QA automation engineer to develop and maintain automated test scripts for our software products. Responsibilities include designing test automation frameworks, executing tests, and analyzing test results to ensure product quality.','Rs. 4,00,000 - 5,00,000','0-1 Years'),(1009,'Mobile App Developer','Bengaluru, Karnataka','Join our mobile development team and build innovative mobile applications for iOS and Android platforms. Responsibilities include developing new features, optimizing performance, and ensuring compatibility across devices.','Rs. 7,00,000 - 9,00,000','1-3 Years'),(1010,'Database Administrator','Bengaluru, Karnataka','Join our IT team as a database administrator and manage our databases to ensure data integrity, availability, and performance. Responsibilities include database design, implementation, optimization, and backup and recovery.','Rs. 4,00,000 - 5,00,000','0-1 Years'),(1011,'Cloud Solutions Architect','Bengaluru, Karnataka','We are seeking a skilled cloud solutions architect to design and implement cloud-based solutions for our organization. Responsibilities include assessing business requirements, designing cloud architectures, and overseeing cloud migration projects.','Rs. 9,00,000 - 10,00,000','3-4 Years');
/*!40000 ALTER TABLE `career` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-03 17:00:46
