-- Create Writer Table

CREATE TABLE IF NOT EXISTS `Writers` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(255) UNIQUE NOT NULL,
    `Email` VARCHAR(255) UNIQUE NOT NULL,
    `Photo` VARCHAR(255) NULL,
    `DateJoined` DATE NOT NULL,
    PRIMARY KEY (`Id`)
);

-- Create Reader Table

CREATE TABLE IF NOT EXISTS `Readers` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `Username` VARCHAR(255) UNIQUE NOT NULL,
    `Email` VARCHAR(255) UNIQUE NOT NULL,
    `Photo` VARCHAR(255) NULL,
    `DateJoined` DATE NOT NULL,
    PRIMARY KEY (`Id`)
);

-- Create Posts Table

CREATE TABLE IF NOT EXISTS `Posts` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `WriterId` INT(11) NOT NULL,
    `Content` LONGTEXT CHAR SET utf8mb4 NOT NULL,
    `Photo` VARCHAR(255) NULL,
    `Posted` DATE NOT NULL,
    PRIMARY KEY (`Id`),
    FOREIGN KEY (`WriterId`) REFERENCES `Writers` (`Id`) ON DELETE CASCADE
);

-- Create Comments Table

CREATE TABLE IF NOT EXISTS `Comments` (
    `Id` INT(11) NOT NULL AUTO_INCREMENT,
    `ReaderId` INT(11) NOT NULL,
    `PostId`  INT(11) NULL,
    `Content` LONGTEXT CHAR SET utf8mb4 NOT NULL,
    `Posted` DATE NOT NULL,
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
('Beans', 'beans@oregonstate.edu', 'fake/path/jason.jpg', curdate()),
('fakeuser', 'fakeuser@oregonstate.edu', 'fake/path/fake.jpg', curdate()),
('Sally', 'sally@email.com', NULL, curdate());

-- Insert to Readers
INSERT INTO Readers (Username, Email, Photo, DateJoined)
VALUES
('John', 'john@email.com', 'fake/path/reader1.jpg', curdate()),
('Mufasa', 'mufasa@email.com', 'fake/path/reader2.jpg', curdate()),
('Elyse', 'elyse@email.com', 'fake/path/reader3.jpg', curdate());

-- Insert to Posts
INSERT INTO Posts (WriterId, Content, Photo, Posted)
VALUES
((SElECT Id FROM Writers WHERE Username='Beans'), 'Test content very good writing by Beans', 'fake/path/post1.jpg', curdate()),
((SELECT Id FFROM Writers WHERE Username='fakeuser'), 'Test content very good writing by fakeuser', NULL, curdate()),
((SELECT Id FFROM Writers WHERE Username='Sally'), 'Test content very good writing by Sally', NULL, curdate());

-- Insert to Comments
INSERT INTO Comments (ReaderId, PostId, Content, Posted)
VALUES
((SELECT Id FROM Readers WHERE Username='John'), 4, 'Test comment reader 1 to post 1', curdate()),
((SELECT Id From Readers WHERE Username='John'), 14, 'Test comment reader 1 to post 2', curdate()),
((SELECT Id FROM Readers WHERE Username='Mufasa'), 4, 'Test comment reader 2 to post 1', curdate()),
((SELECT Id FROM Readers WHERE Username='Elyse'), 24, 'Test comment reader 2 to post 2', curdate());

-- Insert to WritersReaders
INSERT INTO WritersReaders (ReaderId, WriterId)
VALUES
(4, 14),
(4, 4),
(24, 14);