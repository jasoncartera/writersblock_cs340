import React from 'react';

/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function PostSearch({ setPosts, writers }) {
    
    return (
        <form className="search-form" id="search-post-form">
            <div className='formContents'>
                <p>Search Posts</p>
                    <div className='input-group'>
                        <label htmlFor="post-writerid">Search by Writer:</label>
                        <select type="number" name="post-writerid" id="post-writerid" defaultValue={''}>
                            <option value="">Select a Writer</option>
                            {writers.map((writer, i) => <option key={i} value={writer.Id}>{writer.Username}</option>)}
                        </select>
                    </div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
}

export default PostSearch;