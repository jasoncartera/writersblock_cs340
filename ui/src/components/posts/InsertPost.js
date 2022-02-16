import React from 'react';


/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function InsertPost({ setPosts, writers }) {

    
    return (
        <form className="insert-form" id="add-post-form">
            
            <p>Insert New Post</p>
            <div>
                 <label for="post-input-writerid">WriterId</label>
                <select type="number" name="post-input-writerid" id="post-input-writerid">
                    <option value="" selected>Select a Writer</option>
                    {writers.map((writer, i) => <option value={writer.Id}>{writer.Username}</option>)}
                </select>
            </div>
                    
            <div>
                <label for="post-cotnent">Content:</label>
                <textarea name="post-content" id="post-content" rows="8" cols="50"></textarea>
            </div>

            <div>
                <label for="post-photo">Upload photo:</label>
                <input type="file" name="post-photo" id="post-photo"></input>
            </div>
                    
            <div>
                <label for="post-date">Post Date:</label>
                <input type="date" name="post-date" id="post-date"></input>
            </div>       

            <button type="submit">SUBMIT</button>

        </form>
    );
}

export default InsertPost;