import React from 'react';
import CommentList from '../components/comments/CommentList';
import InsertComment from '../components/comments/InsertComment';
import { useState } from 'react';
import { useOutletContext } from "react-router-dom";

function Comments() {

    // Get, Set state
    const [readers] = useOutletContext();
    const [comments, setComments] = useState([]);

    return (
        <>
            
            <div className="Entity-header">
                <h1>Manage Comments</h1>
            </div>

            <div className="Entity-page">
                <div className="list">
                    <CommentList comments={comments} />
                </div>
                <div className="insert">
                    <InsertComment setComments={setComments} readers={readers}/>
                </div>
            </div>
        </>
    );
}

export default Comments;