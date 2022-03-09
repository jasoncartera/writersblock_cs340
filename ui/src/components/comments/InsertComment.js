import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";

/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0

Citation for the following function:
Date: 2/27/2022
Adapted from: R.Byrd Portfolio Project, OSU CS290 F'21
Code available upon request.
*/
function InsertComment({ setComments, readers }) {

    const context = useOutletContext();
    const posts = context.post[0];

    // input state
    const [readerId, setReaderId] = useState('');
    const [postId, setPostId] = useState('');
    const [posted, setPosted] = useState('');
    const [content, setContent] = useState("");

    // api calls
    const insertComment = async (event) => {
        event.preventDefault();
        const newComment = { readerId, postId, content, posted };
        const response = await fetch('https://writers-block-serve.herokuapp.com/comments', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // successful insert
        if (response.status === 200) {

            // re-render table
            const response = await fetch(' https://writers-block-serve.herokuapp.com/comments');
            const comments = await response.json();
            setComments(comments);

            // clear input values
            setReaderId('');
            setPostId('');
            setPosted('');
            setContent("");

        }
    };

    return (
        <div className="insert-form" id="add-comment-form">
            <form onSubmit={insertComment}>
                <div className='formContents'>
                    <p>Insert New Comment</p>
                    <div className='input-group'>
                        <label htmlFor="comment-readerid">Reader:</label>
                        <select type="number"
                            name="comment-readerid"
                            id="comment-readerid"
                            value={readerId}
                            onChange={e => setReaderId(e.target.value)}
                            required>
                            <option value="">Select a Reader</option>
                            {readers.map((reader, i) => <option key={i} value={reader.Id}>{reader.Username}</option>)}
                        </select>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="comment-postid">PostId:</label>
                        <select type="number"
                            name="comment-postid"
                            id="comment-postid"
                            value={postId}
                            onChange={e => setPostId(e.target.value)}
                            required>
                            <option value="">Select a PostId</option>
                            {posts.map((post, i) => <option key={i} value={post.Id}>{post.Id}</option>)}
                        </select>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="comment-date">Comment Date:</label>
                        <input type="date"
                            name="comment-date"
                            id="comment-date"
                            value={posted}
                            onChange={e => setPosted(e.target.value)}
                            required>
                        </input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="comment-content">Content:</label>
                        <textarea name="comment-content"
                            id="comment-content"
                            rows="4"
                            cols="30"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            required>
                        </textarea>
                    </div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default InsertComment;
