import React from 'react';
import Post from './Post';
import { useOutletContext } from "react-router-dom";


/* 
Citation for the following function:
Date: 2/15/2022
How table is broken up into components is Adapted from: 
    movies_ui.zip (particularly MovieList.js and Movie.js) from CS 290 F'21, Module 9, Exploration — Implementing a Full-Stack MERN App - Part 1
Source URL: https://canvas.oregonstate.edu/courses/1830200/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=21362841
*/
function PostList({ posts , setPostToEdit }) {

    const context = useOutletContext();
    let setPosts = context.post[1]

    const onDelete = async id => {
        
        const response = await fetch(`https://writers-block-serve.herokuapp.com/posts/${id}`, {method: 'DELETE'});

        if (response.status === 204) {
            // re-render table
            const response = await fetch('https://writers-block-serve.herokuapp.com/posts');
            const posts = await response.json();
            setPosts(posts);
        } else {
            console.error(`Failed to delete the post with id ${id}, status code ${response.status}`);
        }
    }

    const onEdit= post => {
        setPostToEdit(post);
    }
    
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
                    {posts.map((post, i) => <Post post={post}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
                </tbody>
            </table>
        </>
    );
}

export default PostList;