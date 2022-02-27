import React, { useState } from 'react';
import { useOutletContext } from "react-router-dom";

/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function CommentSearch({ setComments, readers }) {

    const context = useOutletContext();
    const posts = context.post[0];

    // search state
    const [username, setUsername] = useState('');
    const [postId, setPostId] = useState('');

    // api calls
    const restore = async () => {
        const response = await fetch(' https://writers-block-serve.herokuapp.com/comments');
        const comments = await response.json();
        setComments(comments);
    };

    const commentSearchReader = async () => {
        const response = await fetch(`https://writers-block-serve.herokuapp.com/comments/${username}`, {
            method: 'GET',
            mode: 'cors'
        });

        // successful insert
        if(response.status === 200){

            // re-render table
            const comments = await response.json();
            setComments(comments);

        } else if (response.status === 404){
            alert("Reader not found in Comments entity.");
            restore();
        }

         // clear input values
         setUsername('');
    };
    
    const commentSearchPost = async () => {
        const response = await fetch(`https://writers-block-serve.herokuapp.com/comments/byPost/${postId}`, {
            method: 'GET',
            mode: 'cors'
        });

        // successful insert
        if(response.status === 200){

            // re-render table
            const comments = await response.json();
            setComments(comments);

        } else if (response.status === 404){
            alert("Post not found in Comments entity.");
            restore();
        }

        // clear input values
        setPostId('');
    };

    return (
        <>
            <div className="search-form" id="search-comment-form-username">
                <div className='formContents'>
                    <p>Search Comments Table</p>
                    <div className='input-group'>
                        <label htmlFor="comment-readerid">Search by Reader:</label>
                        <select type="number" 
                                name="comment-readerid" 
                                id="comment-readerid"
                                value={username}
                                onChange={e => setUsername(e.target.value)}>
                            <option value="">Select a Reader</option>
                            {readers.map((reader, i) => <option key={i} value={reader.Username}>{reader.Username}</option>)}
                        </select>
                    </div>
                    <button type="submit" onClick={commentSearchReader}>SUBMIT</button>
                </div>
            </div> 
            <br></br>
            <div className="search-form" id="search-comment-form-post">
                <div className='formContents'>      
                    <div className='input-group'>
                        <label htmlFor="comment-postid">Search by PostId:</label>
                        <select type="number" 
                                name="comment-postid" 
                                id="comment-postid"
                                value={postId}
                                onChange={e => setPostId(e.target.value)}>
                            <option value="">Select a PostId</option>
                            {posts.map((post, i) => <option key={i} value={post.Id}>{post.Id}</option>)}
                        </select>
                    </div>
                    <button type="submit" onClick={commentSearchPost}>SUBMIT</button>
                </div>
            </div>

            <br></br>
            <br></br>

            <div className="search-form" id="restore">
                <div className='formContents'>      
                    <button type="submit" onClick={restore}>Restore Original Table</button>
                </div>
            </div>
        </>
    );
}

export default CommentSearch;