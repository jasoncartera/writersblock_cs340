import React from 'react';
import InsertPost from '../components/posts/InsertPost';
import PostList from '../components/posts/PostList';
import { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import UpdatePost from '../components/posts/UpdatePost';

function Posts() {

    const [writers] = useOutletContext();
    
    // Set state
    const [posts, setPosts] = useState([]);

    return (
        <>
            <div className="title">
                <h1>Manage Posts</h1>
            </div>
            <div className="page-body">
                <div className="list">
                    <PostList posts={posts}/>
                </div>
                <div className='insert-update'>
                    <div className="insert">
                        <InsertPost setPosts={setPosts} writers={writers}/>
                    </div>
                    <div className="update">
                        <UpdatePost setPosts={setPosts} writers={writers}/>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default Posts;