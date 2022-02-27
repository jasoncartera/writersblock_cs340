import React from 'react';


/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function UpdatePost({ setPosts, writers }) {

    
    return (
        <div className="update-form" id="update-post-form">
            <div className='formContents'>
                <p>Update Post</p>
                <div className='input-group'>
                    <label htmlFor="post-id">Id:</label>
                    <input type="number" name="post-id" id="post-update-id"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="post-writerid">Writer:</label>
                    <select type="number" name="post-writerid" id="post-update-writerid" defaultValue={''}>
                        <option value="">Select a Writer</option>
                        {writers.map((writer, i) => <option key={i} value={writer.Id}>{writer.Username}</option>)}
                    </select>
                </div>
                <div className='input-group'>
                    <label htmlFor="post-photo">Update Photo:</label>
                    <input type="file" name="post-photo" id="post-update-photo"></input>
                </div>
                     
                <div className='input-group'>
                    <label htmlFor="post-update-date">Post Date:</label>
                    <input type="date" name="post-date" id="post-update-date"></input>
                </div>       
                <div className='input-group'>
                    <label htmlFor="post-content">Content:</label>
                    <textarea name="post-update-content" id="post-update-content" rows="4" cols="30"></textarea>
                </div>
                <button type="submit" className="update-button">UPDATE</button>
            </div>
        </div>
    );
}

export default UpdatePost;