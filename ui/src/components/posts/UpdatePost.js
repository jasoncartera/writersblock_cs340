import React, { useState, useRef, useEffect } from 'react';


/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function UpdatePost({ setPosts, writers, postToEdit }) {

    const [id, setId] = useState('');
    const [postWriter, setPostWriter] = useState('');
    const [content, setContent] = useState('');
    const [posted, setPosted] = useState('');
    const [photo, setPhoto] = useState('');
    const [file, setFile] = useState(null);
    const imgRef = useRef(null);

    useEffect(() => {
        setId(postToEdit.Id);
        setPostWriter(postToEdit.Username);
        setContent(postToEdit.Content);
        setPosted(postToEdit.Posted ? postToEdit.Posted.split("T")[0] : '');
        setPhoto(postToEdit.Photo);
    }, [postToEdit]);

    const fileSelected = event => {
        const file = event.target.files[0];
        setFile(file);
    }

    const updatePost = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", postWriter);
        formData.append("content", content);
        formData.append("posted", posted);
        if (file) {
            formData.append("updatePostPhoto", file);
        } else {
            formData.append("photo", photo ? photo : '');
        }

        const response = await fetch(`https://writers-block-serve.herokuapp.com/posts/${id}`, {
            method: 'PUT',
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
            setId('')
            setPostWriter('');
            setContent('');
            setPosted('');
            setPhoto('')
            imgRef.current.value = null;
        }

    };

    return (
        <div className="update-form" id="update-post-form">
            <form onSubmit={updatePost} encType="multipart/form-data">
                <div className='formContents'>
                    <p>Update Post</p>
                    <div className='input-group'>
                        <label htmlFor="postId">Id:</label>
                        <input type="number" 
                        name="postId" 
                        id="post-update-id"
                        value={id}
                        onChange={ e => {setId(e.target.value)}}
                        disabled></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="postWriterId">Writer:</label>
                        <select type="number" 
                        name="postWriterId" 
                        id="post-update-writerid" 
                        defaultValue={''}
                        value={postWriter}
                        required
                        onChange={e => setPostWriter(e.target.value)}>
                        <option value=''>Select a Writer</option>
                            {writers.map((writer, i) => <option 
                                key={i} 
                                value={writer.Username}>{writer.Username}</option>)}
                        </select>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="updatePostPhoto">Update Photo:</label>
                        <input type="file" 
                        name="updatePostPhoto" 
                        id="post-update-photo"
                        ref={imgRef}
                        onChange={fileSelected}>
                        </input>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="postUpdateDate">Post Date:</label>
                        <input type="date" 
                        name="postUpdateDate" 
                        id="post-update-date"
                        value={posted}
                        onChange={e => {setPosted(e.target.value)}}
                        required></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="post-content">Content:</label>
                        <textarea 
                        name="postUpdateContent" 
                        id="postUpdateContent"
                        value={content}
                        onChange={e => {setContent(e.target.value)}} 
                        required
                        rows="4" 
                        cols="30"></textarea>
                    </div>
                    <button type="submit" className="update-button">UPDATE</button>
                </div>
            </form>
        </div>
    );
}

export default UpdatePost;