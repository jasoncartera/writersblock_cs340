import React from 'react';
import InsertPost from '../components/posts/InsertPost';
import PostList from '../components/posts/PostList';
import { useOutletContext } from "react-router-dom";
import UpdatePost from '../components/posts/UpdatePost';
import PostSearch from '../components/posts/PostSearch';

function Posts() {

    const context = useOutletContext();
    let writers = context.write[0];
    let [posts, setPosts] = context.post;

    return (
        <>
            <div className="title">
                <h1>Manage Posts</h1>
            </div>
            <div className="page-body">
                <div className="list">
                    <PostList posts={posts}/>
                </div>

                <div className='dbms-components'>
                    <div className='search'>
                        <PostSearch setPosts={setPosts} writers={writers}/>
                    </div>
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