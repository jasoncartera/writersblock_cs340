import React from 'react';
import { useOutletContext } from "react-router-dom";

/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function CommentSearch({ setComments, readers }) {

    const [posts] = useOutletContext();
    
    return (
        <>
            <form className="search-form" id="search-comment-form-username">
                <div className='formContents'>
                    <p>Search Comments Table</p>
                    <div className='input-group'>
                        <label for="comment-readerid">Search by Reader:</label>
                        <select type="number" name="comment-readerid" id="comment-readerid">
                            <option value="" selected>Select a Reader</option>
                            {readers.map((reader, i) => <option value={reader.Id}>{reader.Username}</option>)}
                        </select>
                    </div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form> 
            <form className="search-form" id="search-comment-form-post">
            <div className='formContents'>      
                    <div className='input-group'>
                        <label for="comment-postid">Search by PostId:</label>
                        <select type="number" name="comment-postid" id="comment-postid">
                            <option value="" selected>Select a PostId</option>
                            {posts.map((post, i) => <option value={post.Id}>{post.Id}</option>)}
                        </select>
                    </div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </>
    );
}

export default CommentSearch;