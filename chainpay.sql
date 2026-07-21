-- MySQL dump 10.13  Distrib 9.7.1, for macos14.8 (arm64)
--
-- Host: localhost    Database: chainpay
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `company` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `description` text,
  `rating` decimal(2,1) DEFAULT '0.0',
  `verified` tinyint(1) DEFAULT '1',
  `price` decimal(10,2) NOT NULL,
  `image` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Enterprise ERP License','SAP','Software','Complete enterprise ERP suite with blockchain payment integration.',4.9,1,14500.00,'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80','2026-07-17 09:05:06'),(2,'Cloud Infrastructure','AWS','Cloud','Scalable cloud infrastructure for enterprise applications.',4.8,1,13000.00,'https://images.unsplash.com/photo-1669865015890-4dbd855de0f7?q=80&w=1480&auto=format&fit=crop','2026-07-17 09:05:06'),(3,'Cyber Security Suite','Cisco','Security','Advanced enterprise security suite with threat detection.',4.7,1,12200.00,'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80','2026-07-17 09:05:06'),(4,'Blockchain Consulting','ConsenSys','Blockchain','Enterprise blockchain consulting and smart contract development.',4.8,1,19800.00,'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80','2026-07-17 09:05:06');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `buyer_id` int NOT NULL,
  `product_id` int NOT NULL,
  `invoice_id` varchar(50) NOT NULL,
  `transaction_hash` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `status` enum('Pending','Completed','Failed') DEFAULT 'Completed',
  `purchased_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `invoice_id` (`invoice_id`),
  KEY `buyer_id` (`buyer_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`id`),
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,1,1,'INV-1784321550022','83434244cc95d325eba45318e77ad0bd578736ff71c86fa6e3cf737514461cfb',14500.00,'Completed','2026-07-17 20:52:30'),(2,1,1,'INV-1784540841935','b84a16fe8475e3737b8e4bebe86b9a58654f6c59727c245cfe1b685c862ca372',14500.00,'Completed','2026-07-20 09:47:21'),(3,1,1,'INV-1784542299975','2fed50119f08fcf3a08c6fd5228d018266ef1f5d08575aef94379ede21e18165',14500.00,'Completed','2026-07-20 10:11:39'),(4,1,2,'INV-1784544684549','92ec579cac3f962cb73b8f5ee6594d83b3d749cc034d976b5ac3ebea177e9661',13000.00,'Completed','2026-07-20 10:51:24'),(5,1,3,'INV-1784544992473','1057f4b9f5943ec1c5d639f2210d574fe55b861ba159c1d3a8d17eb84e073b94',12200.00,'Completed','2026-07-20 10:56:32'),(6,1,2,'INV-1784545404018','3f67161239cc4d34a8fb7cbc650f9acd8c0a79d9103ee592c9e3487128856e03',13000.00,'Completed','2026-07-20 11:03:24'),(7,1,1,'INV-1784546184346','768c7703d63fdeb9a73e3e4505a883a3d4f19b5edfaf928343d111c4825ae8c1',14500.00,'Completed','2026-07-20 11:16:24'),(8,2,1,'INV-1784631966137','5b72999b0620962cd6ee5c7de95aae15fe0b3a8979a40b9d3e01bd565767f625',14500.00,'Completed','2026-07-21 11:06:06');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('buyer','seller','admin') DEFAULT 'buyer',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jaswanth','jaswanth@gmail.com','$2b$10$3wfev0UabwPOkrkqJ4eHCu/XtQ.WXoqRvE9euZC3O5mVtEYpe7wTq','admin','2026-07-16 20:02:17'),(2,'Yeruva Jaswanth Reddy','Jashu4219@gmail.com','$2b$10$lzk0m/BDHqKJxJkDnp4eOugaMamLrisaM8V/HPj/5JE6QFMtpug3W','buyer','2026-07-21 10:24:19');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet_transactions`
--

DROP TABLE IF EXISTS `wallet_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet_transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `wallet_id` int NOT NULL,
  `type` enum('credit','debit') NOT NULL,
  `amount` decimal(12,2) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `wallet_id` (`wallet_id`),
  CONSTRAINT `wallet_transactions_ibfk_1` FOREIGN KEY (`wallet_id`) REFERENCES `wallets` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet_transactions`
--

LOCK TABLES `wallet_transactions` WRITE;
/*!40000 ALTER TABLE `wallet_transactions` DISABLE KEYS */;
INSERT INTO `wallet_transactions` VALUES (1,1,'credit',1000.00,'Funds Added','2026-07-20 11:16:14'),(2,1,'credit',3000.00,'Funds Added','2026-07-20 11:23:10'),(3,2,'credit',100000.00,'Funds Added','2026-07-21 11:05:58'),(4,2,'debit',14500.00,'Purchase Invoice INV-1784631966137','2026-07-21 11:06:06'),(5,2,'credit',1000000.00,'Funds Added','2026-07-21 11:06:41');
/*!40000 ALTER TABLE `wallet_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallets`
--

DROP TABLE IF EXISTS `wallets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `balance` decimal(12,2) DEFAULT '0.00',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `wallets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallets`
--

LOCK TABLES `wallets` WRITE;
/*!40000 ALTER TABLE `wallets` DISABLE KEYS */;
INSERT INTO `wallets` VALUES (1,1,4000.00,'2026-07-20 11:16:08'),(2,2,1085500.00,'2026-07-21 10:24:54');
/*!40000 ALTER TABLE `wallets` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-21 18:36:41
