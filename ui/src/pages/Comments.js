import React from 'react';
import CommentList from '../components/comments/CommentList';
import InsertComment from '../components/comments/InsertComment';
import { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import UpdateComment from '../components/comments/UpdateComment';

function Comments() {

    // Get, Set state
    const [readers] = useOutletContext();
    const [comments, setComments] = useState([]);

    return (
        <>
            <div className="title">
                <h1>Manage Comments</h1>
            </div>

            <div className="page-body">
                <div className="list">
                    <CommentList comments={comments} />
                </div>
                <div className='insert-update'>
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