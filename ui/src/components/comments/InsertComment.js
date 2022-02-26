import React from 'react';
import { useOutletContext } from "react-router-dom";


/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function InsertComment({ setComments, readers }) {

    const context = useOutletContext();
    const posts = context.post[0];

    return (
        <form className="insert-form" id="add-comment-form">
            <div className='formContents'>
                <p>Insert New Comment</p>
                <div className='input-group'>
                    <label htmlFor="comment-readerid">Reader:</label>
                    <select type="number" name="comment-readerid" id="comment-readerid" defaultValue={''}>
                        <option value="">Select a Reader</option>
                        {readers.map((reader, i) => <option key={i} value={reader.Id}>{reader.Username}</option>)}
                    </select>
                </div>
                <div className='input-group'>
                    <label htmlFor="comment-postid">PostId:</label>
                    <select type="number" name="comment-postid" id="comment-postid" defaultValue={''}>
                        <option value="">Select a PostId</option>
                        {posts.map((post, i) => <option key={i} value={post.Id}>{post.Id}</option>)}
                    </select>
                </div>
                <div className='input-group'>
                    <label htmlFor="comment-date">Comment Date:</label>
                    <input type="date" name="comment-date" id="comment-date"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="comment-content">Content:</label>
                    <textarea name="comment-content" id="comment-content" rows="4" cols="30"></textarea>
                </div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
}

export default InsertComment;
