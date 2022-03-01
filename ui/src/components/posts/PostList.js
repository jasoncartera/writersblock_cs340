import React from 'react';
import Post from './Post';


/* 
Citation for the following function:
Date: 2/15/2022
How table is broken up into components is Adapted from: 
    movies_ui.zip (particularly MovieList.js and Movie.js) from CS 290 F'21, Module 9, Exploration — Implementing a Full-Stack MERN App - Part 1
Source URL: https://canvas.oregonstate.edu/courses/1830200/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=21362841
*/
function PostList({ posts }) {
    posts.sort((a, b) => (a.Id > b.Id ? 1: -1));
    
    return (
        <>
            <p>Current Posts</p>
            <table id="posts" className="list-table">
                <thead>
                    <tr className="list-row">
                        <th>Id</th>
                        <th>Writer Username</th>
                        <th>Content</th>
                        <th>Photo</th>
                        <th>Posted</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post, i) => <Post post={post} key={i} />)}
                </tbody>
            </table>
        </>
    );
}

export default PostList;