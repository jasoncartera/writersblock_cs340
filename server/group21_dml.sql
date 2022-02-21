-- colon : used to denote variables that will be used by our back-end code

-- Writers Methods

-- Query to add a new Writer

INSERT INTO Writers (Username, Email, Photo, DateJoined) VALUES (:username, :email, :photo, :dateJoined);

-- Query to select Writer by UserName

SELECT * FROM Writers WHERE Username=:username;

-- Query to select all Writers

SELECT * FROM Writers;

-- Query to update a Writer by Id

UPDATE Writers SET Username=:username, Email=:email, Photo=:photo, DateJoined=:dateJoined WHERE Id=:Id;

-- Query to delete a Writer by Id

DELETE FROM Writers WHERE id=:id

-- Readers Methods

-- Create a new Reader

INSERT INTO Readers (Username, Email, Photo, DateJoined) VALUES (:username, :email, :photo, :dateJoined);

-- Select all a Reader by UserName

SELECT * FROM Readers WHERE Username=:username;

-- Select all Readers

SELECT * FROM Readers;

-- Update Reader by Id

UPDATE Readers SET Username=:username, Email=:email, Photo=:photo, DateJoined=:dateJoined WHERE Id=:Id;

-- Delete Reader by Id

DELETE FROM Readers WHERE id=:Id;

-- Posts methods

-- Create a new Post

INSERT INTO Posts (WriterId, Content, Photo, Posted) VALUES (:writerId, :content, :photo, :posted);

-- Retrieve all posts by Writer username

SELECT Posts.Id, Username, Content, Posts.Photo, Posted 
FROM Writers 
INNER JOIN Posts ON Writers.Id = Posts.WriterId 
WHERE Username=:username;

-- Retrieve all posts

SELECT Posts.Id, Username, Content, Posts.Photo, Posted 
FROM Writers
INNER JOIN Posts ON Writers.Id = Posts.WriterId;

-- Update a post by PostId

UPDATE Posts SET WriterId=:writerId, Content=:content, Photo=:photo, Posted=:posted WHERE Id=:id;

-- Delete a post by PostId

DELETE FROM Posts WHERE id=:id;

-- Comments methods

-- Insert new comment

INSERT INTO Comments (ReaderId, PostId, Content, Posted) VALUES (:ReaderId, :PostId, :Content, :Posted);

-- Retrieve all comments by username

SELECT Comments.Id, PostId, Username, Content, Posted 
FROM Readers 
INNER JOIN Comments ON Readers.Id = Comments.ReaderId 
WHERE Username=:username;

-- Retrieve all comments by PostId

SELECT Comments.Id, PostId, Username, Content, Posted 
FROM Readers 
INNER JOIN Comments ON Readers.Id = Comments.ReaderId
WHERE PostId=:id;

-- Retrieve all comments

SELECT Comments.Id, PostId, Username, Content, Posted 
FROM Readers 
INNER JOIN Comments ON Readers.Id = Comments.ReaderId; 

-- Update a comment by id

UPDATE Comments SET ReaderId=:readerId, PostId=:postId, Content=:content, Posted=:posted WHERE Id=:id;

-- Delete a comment by CommentId

DELETE FROM Comments WHERE id=:id;

-- WritersReaders Methods

-- Create a new WritersReader relationship

INSERT INTO WritersReaders (ReaderId, WriterId) VALUES (:ReaderId, :WriterId)

-- Delete from WritersReader by Id

DELETE FROM WritersReaders WHERE id=:id

-- Delete by Reader Username and Writer Username combo

DELETE FROM WritersReaders
WHERE WriterId = (SELECT Id FROM Writers WHERE Username=:writerUsername)
AND ReaderId = (SELECT id FROM Readers WHERE Username=:readerUsername;

-- Select all WritersReaders relationships

SELECT WritersReaders.Id, Readers.Username as Reader, Writers.Username as Writer
FROM WritersReaders
INNER JOIN Readers ON Readers.Id = WritersReaders.ReaderId
INNER JOIN Writers ON WritersReaders.WriterId = Writers.Id;

-- Select all relationships by Writer Username

SELECT WritersReaders.Id, Readers.Username as Reader, Writers.Username as Writer
FROM WritersReaders
INNER JOIN Readers ON Readers.Id = WritersReaders.ReaderId 
INNER JOIN Writers ON WritersReaders.WriterId = Writers.Id AND Writers.Username=:writerUsername;

-- Select all relationships by Reader Username

SELECT WritersReaders.Id, Readers.Username as Reader, Writers.Username as Writer
FROM WritersReaders
INNER JOIN Readers ON Readers.Id = WritersReaders.ReaderId
AND Readers.Username=:readerUsername
INNER JOIN Writers ON WritersReaders.WriterId = Writers.Id;