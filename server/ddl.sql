CREATE TABLE IF NOT EXISTS`Writers` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(255) UNIQUE NOT NULL,
    `Email` VARCHAR(255) UNIQUE NOT NULL,
    `Photo` VARCHAR(255) NULL,
    `DateJoined` DATETIME NOT NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE IF NOT EXISTS `Readers` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(255) UNIQUE NOT NULL,
    `Email` VARCHAR(255) UNIQUE NOT NULL,
    `Photo` VARCHAR(255) NULL,
    `DateJoined` DATETIME NOT NULL,
    PRIMARY KEY (`Id`)
);

CREATE TABLE IF NOT EXISTS `Posts` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `WriterId` INT(11) NOT NULL,
    `Content` LONGTEXT CHAR SET utf8mb4 NOT NULL,
    `Photo` VARCHAR(255) NULL,
    `Posted` DATETIME NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`WriterId`) REFERENCES `Writers` (`Id`) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS `Comments` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `ReaderId` INT(11) NOT NULL,
    `PostId`  INT(11) NULL,
    `Content` LONGTEXT CHAR SET utf8mb4 NOT NULL,
    `Posted` DATETIME NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`ReaderId`) REFERENCES `Readers` (`Id`) ON DELETE CASCADE,
    FOREIGN KEY (`PostId`) REFERENCES `Posts` (`Id`) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS `WritersReaders` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `ReaderId` INT(11) NOT NULL,
    `WriterId` INT(11) NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`ReaderId`) REFERENCES `Readers` (`Id`) ON DELETE CASCADE,
    FOREIGN KEY (`WriterId`) REFERENCES `Writers` (`Id`) ON DELETE CASCADE
);