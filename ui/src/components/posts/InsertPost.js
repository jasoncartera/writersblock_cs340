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
            
            <div className='formContents'>
                <p>Insert New Post</p>
                    <div className='input-group'>
                        <label htmlFor="post-writerid">Writer:</label>
                        <select type="number" name="post-writerid" id="post-writerid" defaultValue={''}>
                            <option value="">Select a Writer</option>
                            {writers.map((writer, i) => <option key={i} value={writer.Id}>{writer.Username}</option>)}
                        </select>
                    </div>
                            
                    <div className='input-group'>
                        <label htmlFor="post-photo">Upload photo:</label>
                        <input type="file" name="post-photo" id="post-photo"></input>
                    </div>
                            
                    <div className='input-group'>
                        <label htmlFor="post-date">Post Date:</label>
                        <input type="date" name="post-date" id="post-date"></input>
                    </div>  
                     
                    <div className='input-group'>
                        <label htmlFor="post-content">Content:</label>
                        <textarea name="post-content" id="post-content" rows="4" cols="30"></textarea>
                    </div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
}

export default InsertPost;