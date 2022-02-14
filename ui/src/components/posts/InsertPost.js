import React from 'react';


/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function InsertPost({ setPosts, writers }) {

    
    return (
        <form className="Entity-page-form" id="add-post-form">
            
            <fieldset>
                <legend>Insert New Post</legend>
            
                    <label for="post-input-writerid">WriterId</label>
                    <select type="number" name="post-input-writerid" id="post-input-writerid">
                        <option value="" selected>Select a Writer</option>
                        {writers.map((writer, i) => <option value={writer.Id}>{writer.Username}</option>)}
                    </select>

                    <label for="post-conent">Content:</label>
                    <input type="text" name="post-conent" id="post-content"></input>

                    <label for="post-photo">Upload photo:</label>
                    <input type="file" name="post-photo" id="post-photo"></input>

                    <label for="post-date">Post Date:</label>
                    <input type="date" name="post-date" id="post-date"></input>

                    <input type="submit"></input>

            </fieldset>
        </form>
    );
}

export default InsertPost;