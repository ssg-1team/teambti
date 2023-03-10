CREATE TABLE `character` (
  `C_ID` int NOT NULL AUTO_INCREMENT,
  `BASEIMAGE` varchar(45) DEFAULT NULL,
  `HEAD` varchar(45) DEFAULT NULL,
  `EAR` varchar(45) DEFAULT NULL,
  `MOUSE` varchar(45) DEFAULT NULL,
  `EYE` varchar(45) DEFAULT NULL,
  `BODY` varchar(45) DEFAULT NULL,
  `ACCESSORY` varchar(45) DEFAULT NULL,
  `BACKGROUND` varchar(45) DEFAULT NULL,
  `COMPLETED` varchar(45) DEFAULT NULL,
  `E_ID` int DEFAULT NULL,
  PRIMARY KEY (`C_ID`),
  KEY `F_E_ID_idx` (`E_ID`),
  CONSTRAINT `F_E_ID` FOREIGN KEY (`E_ID`) REFERENCES `employ` (`E_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE `department` (
  `D_ID` int NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) NOT NULL,
  PRIMARY KEY (`D_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE `employ` (
  `E_ID` int NOT NULL,
  `NAME` varchar(20) NOT NULL,
  `POSITION` varchar(20) DEFAULT NULL,
  `D_ID` int DEFAULT NULL,
  `M_ID` int DEFAULT NULL,
  PRIMARY KEY (`E_ID`),
  KEY `F_D_ID_idx` (`D_ID`),
  KEY `F_M_ID_idx` (`M_ID`),
  CONSTRAINT `F_D_ID` FOREIGN KEY (`D_ID`) REFERENCES `department` (`D_ID`),
  CONSTRAINT `F_M_ID` FOREIGN KEY (`M_ID`) REFERENCES `mbti` (`M_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE `mbti` (
  `M_ID` int NOT NULL,
  `TYPE` varchar(5) DEFAULT NULL,
  `BASEIMAGE` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`M_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `mbti_feature` (
  `MF_ID` int NOT NULL AUTO_INCREMENT,
  `FEATURE` varchar(100) NOT NULL,
  `M_ID` int DEFAULT NULL,
  PRIMARY KEY (`MF_ID`),
  KEY `F_MF_ID_idx` (`M_ID`),
  CONSTRAINT `F_MF_ID` FOREIGN KEY (`M_ID`) REFERENCES `mbti` (`M_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;


CREATE TABLE `tag` (
  `T_ID` int NOT NULL AUTO_INCREMENT,
  `CONTENT` varchar(45) NOT NULL,
  `E_ID` int DEFAULT NULL,
  PRIMARY KEY (`T_ID`),
  KEY `F_T_ID_idx` (`E_ID`),
  CONSTRAINT `F_T_ID` FOREIGN KEY (`E_ID`) REFERENCES `employ` (`E_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
