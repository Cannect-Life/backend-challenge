/*
SQLyog Ultimate v10.00 Beta1
MySQL - 5.5.5-10.4.13-MariaDB : Database - cannect
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cannect` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `cannect`;

/*Table structure for table `tb_cliente` */

DROP TABLE IF EXISTS `tb_cliente`;

CREATE TABLE `tb_cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `dt_nascimento` date DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `cpf` varchar(100) DEFAULT NULL,
  `rua` varchar(255) DEFAULT NULL,
  `numero` varchar(15) DEFAULT NULL,
  `bairro` varchar(150) DEFAULT NULL,
  `cidade` varchar(150) DEFAULT NULL,
  `estado` varchar(10) DEFAULT NULL,
  `cep` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_cliente` */

/*Table structure for table `tb_pagamento` */

DROP TABLE IF EXISTS `tb_pagamento`;

CREATE TABLE `tb_pagamento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `valor` double DEFAULT NULL,
  `cpf` varchar(20) DEFAULT NULL,
  `titular` varchar(100) DEFAULT NULL,
  `numero` varchar(50) DEFAULT NULL,
  `data_expiracao` varchar(10) DEFAULT NULL,
  `bandeira` varchar(100) DEFAULT NULL,
  `cvv` varchar(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_pagamento` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
