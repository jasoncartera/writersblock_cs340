-- Create Writer Table

CREATE TABLE IF NOT EXISTS `Writers` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(255) UNIQUE NOT NULL,
    `Email` VARCHAR(255) UNIQUE NOT NULL,
    `Photo` VARCHAR(255) NULL,
    `DateJoined` DATETIME NOT NULL,
    PRIMARY KEY (`Id`)
);

-- Create Reader Table

CREATE TABLE IF NOT EXISTS `Readers` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(255) UNIQUE NOT NULL,
    `Email` VARCHAR(255) UNIQUE NOT NULL,
    `Photo` VARCHAR(255) NULL,
    `DateJoined` DATETIME NOT NULL,
    PRIMARY KEY (`Id`)
);

-- Create Posts Table

CREATE TABLE IF NOT EXISTS `Posts` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `WriterId` INT(11) NOT NULL,
    `Content` LONGTEXT CHAR SET utf8mb4 NOT NULL,
    `Photo` VARCHAR(255) NULL,
    `Posted` DATETIME NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`WriterId`) REFERENCES `Writers` (`Id`) ON DELETE CASCADE
);

-- Create Comments Table

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

-- Create WritersReaders Table

CREATE TABLE IF NOT EXISTS `WritersReaders` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `ReaderId` INT(11) NOT NULL,
    `WriterId` INT(11) NOT NULL,
    PRIMARY KEY (`Id`),
    CONSTRAINT `unique_relationship` UNIQUE (`ReaderId`, `WriterId`),
    FOREIGN KEY (`ReaderId`) REFERENCES `Readers` (`Id`) ON DELETE CASCADE,
    FOREIGN KEY (`WriterId`) REFERENCES `Writers` (`Id`) ON DELETE CASCADE
);

-- Insert to Writers

INSERT INTO Writers (Username, Email, Photo, DateJoined)
VALUES 
('jasoncarter', 'carterja@oregonstate.edu', 'fake/path/jason.jpg', curdate()),
('fakeuser', 'fakeuser@oregonstate.edu', 'fake/path/fake.jpg', curdate());

-- Insert to Readers
INSERT INTO Readers (Username, Email, Photo, DateJoined)
VALUES
('reader1', 'reader1@email.com', 'fake/path/reader1.jpg', curdate()),
('reader2', 'reader2@email.com', 'fake/path/reader2.jpg', curdate());

-- Insert to Posts
INSERT INTO Posts (WriterId, Content, Photo, Posted)
VALUES
(1, 'Test content very good writing reader 1', 'fake/path/post1.jpg', curdate()),
(2, 'Test content very good writing reader 2', NULL, curdate());

-- Insert to Comments
INSERT INTO Comments (ReaderId, PostId, Content, Posted)
VALUES
(1, 1, 'Test comment reader 1 to post 1', curdate()),
(1, 2, 'Test comment reader 1 to post 2', curdate()),
(2, 1, 'Test comment reader 2 to post 1', curdate()),
(2, 2, 'Test comment reader 2 to post 2', curdate());

-- Insert to WritersReaders
INSERT INTO WritersReaders (ReaderId, WriterId)
VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2);