CREATE TABLE `Children` (
`GUID` varchar(200) NOT NULL,
`ParentID` varchar(200) NULL,
`ChildID` int NULL,
`ChildIntNumber` int NULL,
`ChildIntEnum` int NULL,
`ChildMoney` decimal(18,8) NULL,
`ChildDatetime` datetime NULL,
`ChildVarchar` varchar(200) NULL,
`ChildLongVarchar` text NULL,
`ChildBit` bit NULL,
`ChildTinyintBool` tinyint NULL,
`ChildTinyintEnum` tinyint NULL,
`ChildText` longtext NULL,
`ChildBinary` longblob NULL,
PRIMARY KEY (`GUID`) 
);

CREATE TABLE `Parents` (
`GUID` varchar(200) NOT NULL,
`ParentIntNumber` int NULL,
`ParentIntEnum` int NULL,
`ParentMoney` decimal(18,8) NULL,
`ParentDatetime` datetime NULL,
`ParentVarchar` varchar(200) NULL,
`ParentLongVarchar` text NULL,
`ParentBit` bit NULL,
`ParentTinyintBool` tinyint NULL,
`ParentTinyintEnum` tinyint NULL,
`ParentText` longtext NULL,
`ParentBinary` longblob NULL,
PRIMARY KEY (`GUID`) 
);

CREATE TABLE `Singles` (
`ID` int NOT NULL AUTO_INCREMENT,
`SingleIntNumber` int NULL,
`SingleIntEnum` int NULL,
`SingleMoney` decimal(18,8) NULL,
`SingleDatetime` datetime NULL,
`SingleVarchar` varchar(200) NULL,
`SingleLongVarchar` text NULL,
`SingleBit` bit NULL,
`SingleTinyintBool` tinyint NULL,
`SingleTinyintEnum` tinyint NULL,
`SingleText` longtext NULL,
`SingleBinary` longblob NULL,
PRIMARY KEY (`ID`) 
);


ALTER TABLE `Children` ADD CONSTRAINT `FK_Children_Parents` FOREIGN KEY (`ParentID`) REFERENCES `Parents` (`GUID`);

