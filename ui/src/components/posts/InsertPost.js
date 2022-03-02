import React, { useState, useRef } from 'react';

/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0

Citation for the following function:
Date: 2/27/2022
Adapted from: R.Byrd Portfolio Project, OSU CS290 F'21
Code available upon request.
*/
function InsertPost({ setPosts, writers }) {

    // input state
    const [writerId, setWriterId] = useState('');
    const [posted, setPosted] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState();
    const imgRef = useRef(null);

    const fileSelected = event => {
        const file = event.target.files[0];
        setFile(file);
    }

    // api calls
    const insertPost = async (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append("writerId", writerId)
        formData.append("postPhoto", file)
        formData.append("posted", posted)
        formData.append("content", content)

        const response = await fetch('https://writers-block-serve.herokuapp.com/posts', {
            method: 'POST',
            mode: 'cors',
            body: formData
        });

        // successful insert
        if (response.status === 200) {

            // re-render table
            const response = await fetch('https://writers-block-serve.herokuapp.com/posts');
            const posts = await response.json();
            setPosts(posts);

            // clear input values
            setWriterId('');
            setPosted('');
            setContent('');
            imgRef.current.value = null;
        }
    };

    return (
        <div className="insert-form" id="add-post-form">
            <form onSubmit={insertPost} encType="multipart/form-data">
                <div className='formContents'>
                    <p>Insert New Post</p>
                    <div className='input-group'>
                        <label htmlFor="post-writerid">Writer:</label>
                        <select type="number"
                            name="post-writerid"
                            id="post-writerid"
                            value={writerId}
                            onChange={e => setWriterId(e.target.value)}>
                            <option value="">Select a Writer</option>
                            {writers.map((writer, i) => <option key={i} value={writer.Id}>{writer.Username}</option>)}
                        </select>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="postPhoto">Upload photo:</label>
                        <input type="file"
                            name="postPhoto"
                            id="post-photo"
                            accept="image/*"
                            ref={imgRef}
                            onChange={fileSelected}>
                        </input>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="post-date">Post Date:</label>
                        <input type="date"
                            name="post-date"
                            id="post-date"
                            value={posted}
                            onChange={e => setPosted(e.target.value)}>
                        </input>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="post-content">Content:</label>
                        <textarea name="post-content"
                            id="post-content"
                            rows="4"
                            cols="30"
                            value={content}
                            onChange={e => setContent(e.target.value)}>
                        </textarea>
                    </div>
                    <button type="submit" onClick={insertPost}>SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default InsertPost;