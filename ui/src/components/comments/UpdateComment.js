import React from 'react';
import { useOutletContext } from "react-router-dom";

function UpdateComment({ setComments, readers }) {

    const [posts] = useOutletContext();
    
    return (
        <form className="insert-form" id="add-comment-form">
            <div className='formContents'>
                <p>Update Comment</p>
                <div className='input-group'>
                    <label for="comment-id">Id:</label>
                    <input type="number" name="comment-id" id="comment-update-id"></input>
                </div>
                <div className='input-group'>
                    <label for="comment-readerid">Reader:</label>
                    <select type="number" name="comment-readerid" id="comment-update-readerid">
                        <option value="" selected>Select a Reader</option>
                        {readers.map((reader, i) => <option value={reader.Id}>{reader.Username}</option>)}
                    </select>
                </div>
                <div className='input-group'>
                    <label for="comment-postid">PostId</label>
                    <select type="number" name="comment-postid" id="comment-update-postid">
                        <option value="" selected>Select a PostId</option>
                        {posts.map((post, i) => <option value={post.Id}>{post.Id}</option>)}
                    </select>
                </div>
                <div className='input-group'>
                    <label for="comment-update-date">Comment Date:</label>
                    <input type="date" name="comment-date" id="comment-update-date"></input>
                </div>
                <div className='input-group'>
                    <label for="comment-update-content">Content:</label>
                    <textarea name="comment-content" id="comment-update-content" rows="4" cols="30"></textarea>
                </div>
                <button type="submit">UPDATE</button>
            </div>
        </form>
    );
}

export default UpdateComment;