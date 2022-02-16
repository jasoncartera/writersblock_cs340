import React from 'react';


/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function InsertComment({ setComments, readers }) {

    
    return (
        <form className="insert-form" id="add-comment-form">
            <p>Insert New Comment</p>
            
            <div>
                <label for="comment-readerid">ReaderId</label>
                <select type="number" name="comment-readerid" id="comment-readerid">
                    <option value="" selected>Select a Reader</option>
                    {readers.map((reader, i) => <option value={reader.Id}>{reader.Username}</option>)}
                </select>
            </div>

            <div>
                <label for="comment-postid">PostId</label>
                <input type="number" name="comment-postid" id="comment-postid"></input>
            </div>

            <div>
                <label for="comment-conent">Content:</label>
                <textarea name="comment-content" id="comment-content" rows="8" cols="50"></textarea>
            </div>

            <div>
                <label for="comment-date">Comment Date:</label>
                <input type="date" name="comment-date" id="comment-date"></input>
            </div>

            <button type="submit">SUBMIT</button>
        </form>
    );
}

export default InsertComment;
