import React from 'react';
import InsertPost from '../components/posts/InsertPost';
import PostList from '../components/posts/PostList';
import { useState } from 'react';
import { useOutletContext } from "react-router-dom";

function Posts() {

    const [writers] = useOutletContext();
    
    // Set state
    const [posts, setPosts] = useState([]);

    return (
        <>
            <div className="Entity-header">
                <h1>Manage Posts</h1>
            </div>
            <div className="Entity-page">
                <div className="list">
                    <PostList posts={posts}/>
                </div>
                <div className="insert">
                    <InsertPost setPosts={setPosts} writers={writers}/>
                </div>
            </div>
        </>
    );
}

export default Posts;