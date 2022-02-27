import React, { useState } from 'react';

/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function PostSearch({ setPosts, writers }) {

    // search state
    const [username, setUsername] = useState('');

    // api calls
    const restore = async () => {
        const response = await fetch(' https://writers-block-serve.herokuapp.com/posts');
        const posts = await response.json();
        setPosts(posts);
    };

    const postWriterSearch = async () => {
        const response = await fetch(`https://writers-block-serve.herokuapp.com/posts/${username}`, {
            method: 'GET',
            mode: 'cors'
        });

        // successful insert
        if(response.status === 200){

            // re-render table
            const posts = await response.json();
            setPosts(posts);

        } else if (response.status === 404){
            alert("Writer not found in Post entity.");
            restore();
        }

        // clear input values
        setUsername('');
    };
    
    return (
        <>
            <div className="search-form" id="search-post-form">
                <div className='formContents'>
                    <p>Search Posts</p>
                        <div className='input-group'>
                            <label htmlFor="post-writerid">Search by Writer:</label>
                            <select type="number" 
                                    name="post-writerid" 
                                    id="post-writerid"
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}>
                                <option value="">Select a Writer</option>
                                {writers.map((writer, i) => <option key={i} value={writer.Username}>{writer.Username}</option>)}
                            </select>
                        </div>
                    <button type="submit" onClick={postWriterSearch}>SUBMIT</button>
                </div>
            </div>

            <br></br>
            <br></br>
            
            <div className="search-form" id="restore">
                <div className='formContents'>      
                    <button type="submit" onClick={restore}>Restore Original Table</button>
                </div>
            </div>
        </>
    );
}

export default PostSearch;