import React from 'react';


function UpdateComment({ setComments, readers }) {

    
    return (
        <form className="insert-form" id="add-comment-form">
            <p>Update Comment</p>
            
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

            <button type="submit">UPDATE</button>
        </form>
    );
}

export default UpdateComment;