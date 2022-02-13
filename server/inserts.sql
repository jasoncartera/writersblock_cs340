INSERT INTO Writers (Username, Email, Photo, DateJoined)
VALUES 
('jasoncarter', 'carterja@oregonstate.edu', 'fake/path/jason.jpg', curdate()),
('fakeuser', 'fakeuser@oregonstate.edu', 'fake/path/fake.jpg', curdate());

INSERT INTO Readers (Username, Email, Photo, DateJoined)
VALUES
('reader1', 'reader1@email.com', 'fake/path/reader1.jpg', curdate()),
('reader2', 'reader2@email.com', 'fake/path/reader2.jpg', curdate());

INSERT INTO Posts (WriterId, Content, Photo, Posted)
VALUES
(1, 'Test content very good writing reader 1', 'fake/path/post1.jpg', curdate()),
(2, 'Test content very good writing reader 2', NULL, curdate());

INSERT INTO Comments (ReaderId, PostId, Content, Posted)
VALUES
(1, 1, 'Test comment reader 1 to post 1', curdate()),
(1, 2, 'Test comment reader 1 to post 2', curdate()),
(2, 1, 'Test comment reader 2 to post 1', curdate()),
(2, 2, 'Test comment reader 2 to post 2', curdate());

INSERT INTO WritersReaders (ReaderId, WriterId)
VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2);
