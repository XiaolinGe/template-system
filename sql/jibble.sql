-- MySQL dump 10.13  Distrib 5.6.26, for osx10.10 (x86_64)
--
-- Host: localhost    Database: jibble
-- ------------------------------------------------------
-- Server version	5.6.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `domain` varchar(250) DEFAULT NULL,
  `template_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'Cafe','127.0.0.1',2,'2015-10-15 10:10:48','2015-10-19 20:47:20'),(2,'Reataurant','localhost',1,'2015-10-15 10:14:34','2015-10-15 10:14:34');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallerys`
--

DROP TABLE IF EXISTS `gallerys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gallerys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(45) NOT NULL,
  `thumb` varchar(45) NOT NULL,
  `title` varchar(45) NOT NULL,
  `url` varchar(45) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallerys`
--

LOCK TABLES `gallerys` WRITE;
/*!40000 ALTER TABLE `gallerys` DISABLE KEYS */;
INSERT INTO `gallerys` VALUES (1,'/demo1/images/s1.jpg','/demo1/images/s1.jpg','Dutch Delight','/demo1/images/s1.jpg',1,NULL,NULL),(2,'/demo1/images/s2.jpg','/demo1/images/s2.jpg','Dutch Delight','/demo1/images/s2.jpg',1,NULL,NULL),(3,'/demo1/images/s3.jpg','/demo1/images/s3.jpg','Dutch Delight','/demo1/images/s3.jpg',1,NULL,NULL),(4,'/demo1/images/s4.jpg','/demo1/images/s4.jpg','Dutch Delight','/demo1/images/s4.jpg',1,NULL,NULL),(5,'/demo1/images/s5.jpg','/demo1/images/s5.jpg','Dutch Delight','/demo1/images/s5.jpg',1,NULL,NULL),(6,'/demo1/images/s6.jpg','/demo1/images/s6.jpg','Dutch Delight','/demo1/images/s6.jpg',1,NULL,NULL),(7,'/demo1/images/s7.jpg','/demo1/images/s7.jpg','Dutch Delight','/demo1/images/s7.jpg',1,NULL,NULL),(8,'/demo1/images/s8.jpg','/demo1/images/s8.jpg','Dutch Delight','/demo1/images/s8.jpg',1,NULL,NULL),(9,'/demo1/images/s9.jpg','/demo1/images/s9.jpg','Dutch Delight','/demo1/images/s9.jpg',1,NULL,NULL),(10,'/demo1/images/s10.jpg','/demo1/images/s10.jpg','Dutch Delight','/demo1/images/s10.jpg',1,NULL,NULL),(11,'/demo1/images/s11.jpg','/demo1/images/s11.jpg','Dutch Delight','/demo1/images/s11.jpg',1,NULL,NULL),(12,'/demo1/images/s12.jpg','/demo1/images/s12.jpg','Dutch Delight','/demo1/images/s1.jpg',1,NULL,NULL),(13,'/demo2/images/s1.jpg','/demo2/images/s1.jpg','','',2,NULL,NULL),(14,'/demo2/images/s2.jpg','/demo2/images/s2.jpg','','',2,NULL,NULL),(15,'/demo2/images/s3.jpg','/demo2/images/s3.jpg','','',2,NULL,NULL),(16,'/demo2/images/s4.jpg','/demo2/images/s4.jpg','','',2,NULL,NULL),(17,'/demo2/images/s5.jpg','/demo2/images/s5.jpg','','',2,NULL,NULL),(18,'/demo2/images/s6.jpg','/demo2/images/s6.jpg','','',2,NULL,NULL),(19,'/demo2/images/s7.jpg','/demo2/images/s7.jpg','','',2,NULL,NULL),(20,'/demo2/images/s8.jpg','/demo2/images/s8.jpg','','',2,NULL,NULL),(21,'/demo2/images/s9.jpg','/demo2/images/s9.jpg','','',2,NULL,NULL),(22,'/demo2/images/s10.jpg','/demo2/images/s10.jpg','','',2,NULL,NULL),(23,'/demo2/images/s11.jpg','/demo2/images/s11.jpg','','',2,NULL,NULL),(24,'/demo2/images/s12.jpg','/demo2/images/s12.jpg','','',2,NULL,NULL);
/*!40000 ALTER TABLE `gallerys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logs`
--

DROP TABLE IF EXISTS `logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `operator` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `action` varchar(45) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logs`
--

LOCK TABLES `logs` WRITE;
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
INSERT INTO `logs` VALUES (2,'staff','2015-10-27 11:34:03','GET /api/customers','2015-10-27 11:30:30'),(3,'staff','2015-10-27 11:34:04','GET /api/simple_infos','2015-10-27 11:34:04'),(4,'staff','2015-10-27 11:34:33','GET /api/logs','2015-10-27 11:34:33'),(5,'staff','2015-10-27 11:39:38','GET /api/gallerys','2015-10-27 11:39:38'),(6,'staff','2015-10-27 11:40:08','GET /api/users','2015-10-27 11:40:08'),(7,'staff','2015-10-27 11:40:13','GET /api/customers','2015-10-27 11:40:13'),(8,'staff','2015-10-27 11:40:49','GET /api/templates','2015-10-27 11:40:49'),(9,'staff','2015-10-27 11:41:22','GET /api/working_hours','2015-10-27 11:41:22');
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `menus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `display` varchar(45) NOT NULL,
  `link` varchar(45) NOT NULL,
  `customer_id` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (1,'home','/home','1',NULL,NULL),(2,'gallery','/gallery','1',NULL,NULL),(3,'phone','/phone','1',NULL,NULL),(4,'map','/map','1',NULL,NULL),(5,'J\'s Tea','/home','2',NULL,NULL),(6,'gallery','/gallery','2',NULL,NULL),(7,'phone','/phone','2',NULL,NULL),(8,'map','/map','2',NULL,NULL);
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2015-10-15 10:10:48','2015-10-15 10:10:48'),(2,'staff','2015-10-15 10:10:48','2015-10-15 10:10:48');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `simple_infos`
--

DROP TABLE IF EXISTS `simple_infos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `simple_infos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `google_map_src` varchar(250) NOT NULL,
  `phone_about_content` varchar(1024) NOT NULL,
  `phone_about_hoveredIcon` varchar(45) NOT NULL,
  `phone_about_icon` varchar(45) NOT NULL,
  `phone_about_img` varchar(45) NOT NULL,
  `phone_about_title` varchar(45) NOT NULL,
  `phone_time_hoveredIcon` varchar(45) NOT NULL,
  `phone_time_icon` varchar(45) NOT NULL,
  `phone_time_img` varchar(45) NOT NULL,
  `phone_time_title` varchar(45) NOT NULL,
  `phone_contact_hoveredIcon` varchar(45) NOT NULL,
  `phone_contact_icon` varchar(45) NOT NULL,
  `phone_contact_img` varchar(45) NOT NULL,
  `phone_contact_title` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `phone_en` varchar(45) NOT NULL,
  `phone_cn` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `map_address` varchar(45) NOT NULL,
  `map_destination` varchar(45) NOT NULL,
  `map_start` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `introduction` varchar(45) NOT NULL,
  `logo_img` varchar(45) NOT NULL,
  `title_map` varchar(45) NOT NULL,
  `title_gallery` varchar(45) NOT NULL,
  `title_about` varchar(45) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `simple_infos`
--

LOCK TABLES `simple_infos` WRITE;
/*!40000 ALTER TABLE `simple_infos` DISABLE KEYS */;
INSERT INTO `simple_infos` VALUES (1,'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2sus!4v1436170635521!6m8!1m7!1sEmPx53PkIOUAAAQqmWhsgw!2m2!1d-36.81214!2d174.726475!3f60.649238235862214!4f-16.318097902715365!5f0.7820865974627469','The only Dutch restaurant in New Zealand. It\\u2019s a place where the the Dutch feel at home, and where the Kiwis can explore the delicacies of the low lands. Try our pancakes, poffertjes or a broodje frikandel. Or pick your favourite Dutch Cheese to take home. Choose your restaurant by clicking on the tiles above.','/demo1/images/icon1.jpg','/demo1/images/icon1-bw.jpg','/demo1/images/hexagon.png','ABOUT','/demo1/images/icon2.jpg','/demo1/images/icon2-bw.jpg','/demo1/images/hexagon.png','TIME','/demo1/images/icon3.jpg','/demo1/images/icon3-bw.jpg','/demo1/images/hexagon.png','CONTACT','3-5 Birkenhead ave, Birkenhead, Auckland,','Phone (English): 09 418 1390,','Phone (中文): 021 022 00379,','Email: info@jibble.co.nz','3-5 Birkenhead ave, Birkenhead, Auckland','To Dutch Delight:','3-5 Birkenhead ave, Birkenhead, Auckland','Dutch Delight','Restaurant or Porterhouse','','','','','',NULL,NULL),(2,'https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2snz!4v1436170131780!6m8!1m7!1sHgRaNXxF_McAAAAGOiCg5g!2m2!1d-36.900635!2d174.742684!3f250.1897867357879!4f-17.25214675495522!5f0.7820865974627469','The only Dutch restaurant in New Zealand. It\\','/demo2/images/icon1.jpg','/demo2/images/icon1-bw.jpg','/demo2/images/hexagon.png','ABOUT','/demo2/images/icon2.jpg','/demo2/images/icon2-bw.jpg','/demo2/images/hexagon.png','TIME','/demo2/images/icon3.jpg','/demo2/images/icon3-bw.jpg','/demo2/images/hexagon.png','CONTACT','919 Dominion Road, Mt Roskill, Auckland,','Phone (English): 09 5507775,','Phone (中文): 09 5507775,','Email: info@jibble.co.nz','919 Dominion Road, Mt Roskill, Auckland','To J\'s Tea:','919 Dominion Road, Mt Roskill, Auckland','J\'s Tea','Restaurant or Porterhouse','','','','','',NULL,NULL);
/*!40000 ALTER TABLE `simple_infos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `templates`
--

DROP TABLE IF EXISTS `templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `templates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `template_folder` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templates`
--

LOCK TABLES `templates` WRITE;
/*!40000 ALTER TABLE `templates` DISABLE KEYS */;
INSERT INTO `templates` VALUES (1,'Demo1','2015-10-15 10:10:48','2015-10-15 10:10:48','Demo1'),(2,'Demo2','2015-10-15 10:10:48','2015-10-15 10:10:48','Demo2');
/*!40000 ALTER TABLE `templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `role_id` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (50,'staff','staff','2','2015-10-15 06:49:16','2015-10-15 06:49:16');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `working_hours`
--

DROP TABLE IF EXISTS `working_hours`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `working_hours` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `days` varchar(45) NOT NULL,
  `times` varchar(45) NOT NULL,
  `customer_id` varchar(45) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `working_hours`
--

LOCK TABLES `working_hours` WRITE;
/*!40000 ALTER TABLE `working_hours` DISABLE KEYS */;
INSERT INTO `working_hours` VALUES (1,'Today','9:00am - 6:00pm','1',NULL,NULL),(2,'Monday','9:00am - 6:00pm','1',NULL,NULL),(3,'Tuesday','9:00am - 6:00pm','1',NULL,NULL),(4,'Wednesday','9:00am - 6:00pm','1',NULL,NULL),(5,'Thursday','9:00am - 6:00pm','1',NULL,NULL),(6,'Friday','9:00am - 6:00pm','1',NULL,NULL),(7,'Saturday','9:00am - 6:00pm','1',NULL,NULL),(8,'Sunday','9:00am - 6:00pm','1',NULL,NULL),(9,'Today','9:00am - 6:00pm','2',NULL,NULL),(10,'Monday','9:00am - 6:00pm','2',NULL,NULL),(11,'Tuesday','9:00am - 6:00pm','2',NULL,NULL),(12,'Wednesday','9:00am - 6:00pm','2',NULL,NULL),(13,'Thursday','9:00am - 6:00pm','2',NULL,NULL),(14,'Friday','9:00am - 6:00pm','2',NULL,NULL),(15,'Saturday','9:00am - 6:00pm','2',NULL,NULL),(16,'Sunday','9:00am - 6:00pm','2',NULL,NULL);
/*!40000 ALTER TABLE `working_hours` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-10-28 13:03:51
