import React from 'react';
import CommentList from '../components/comments/CommentList';
import InsertComment from '../components/comments/InsertComment';
import { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import UpdateComment from '../components/comments/UpdateComment';
import CommentSearch from '../components/comments/CommentSearch';

function Comments() {

    const context = useOutletContext();
    let readers = context.read[0];

    let [comments, setComments] = useState([]);
    const getComments = async () => {
        const response = await fetch(' https://writers-block-serve.herokuapp.com/comments');
        const comments = await response.json();
        setComments(comments);
    }
        
    useEffect(() => {
        getComments();
    }, []);

    return (
        <>
            <div className="title">
                <h1>Manage Comments</h1>
            </div>

            <div className="page-body">
                <div className="list">
                    <CommentList comments={comments} setComments={setComments} />
                </div>
                <div className='dbms-components'>
                <div className="search">
                        <CommentSearch setComments={setComments} readers={readers} />
                    </div>
                    <div className="insert">
                        <InsertComment setComments={setComments} readers={readers}/>
                    </div>
                    <div className="update">
                        <UpdateComment setComments={setComments} readers={readers} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comments;