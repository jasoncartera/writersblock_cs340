import React from 'react';

function InsertComment({ setComments /*, readers*/ }) {

    
    return (
        <form className="Entity-page-form" id="add-comment-form">
            
            <fieldset>
                <legend>Insert New Comment</legend>
                
                <label for="comment-readerid">ReaderId</label>
                <select type="number" name="comment-readerid" id="comment-readerid">
                    <option value="" selected>Select a Writer</option>
                </select>

                <label for="comment-postid">PostId</label>
                <input type="number" name="comment-postid" id="comment-postid"></input>

                <label for="comment-conent">Content:</label>
                <input type="text" name="comment-conent" id="comment-conent"></input>

                <label for="comment-date">Comment Date:</label>
                <input type="date" name="comment-date" id="comment-date"></input>

                <input type="submit"></input>
            </fieldset>
        </form>
    );
}

export default InsertComment;

// For drop down - need to find correct way to lift state for readers
// {readers.map((reader, i) => <option value={reader.Id}>{reader.Username}</option>)}
/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/