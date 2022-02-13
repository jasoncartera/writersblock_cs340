import React from 'react';
import CommentList from '../components/comments/CommentList';
import Navigation from "../components/Navigation";
import InsertComment from '../components/comments/InsertComment';
import { useState } from 'react';

function Comments({readers}) {

    // Set state
    const [comments, setComments] = useState([]);

    return (
        <>
            <Navigation />
            
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