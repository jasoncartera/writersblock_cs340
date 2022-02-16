import React from 'react';


/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function UpdatePost({ setPosts, writers }) {

    
    return (
        <form className="update-form" id="update-post-form">
            
            <p>Update Post</p>
            <div>
                 <label for="post-input-writerid">WriterId</label>
                <select type="number" name="post-input-writerid" id="post-input-writerid">
                    <option value="" selected>Select a Writer</option>
                    {writers.map((writer, i) => <option value={writer.Id}>{writer.Username}</option>)}
                </select>
            </div>
                    
            <div>
                <label for="post-content">Content:</label>
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

            <button type="submit">UPDATE</button>

        </form>
    );
}

export default UpdatePost;