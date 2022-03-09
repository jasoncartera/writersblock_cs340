import React, { useState, useEffect } from 'react';
import { useOutletContext } from "react-router-dom";

function UpdateComment({ setComments, readers, commentToEdit }) {

    const context = useOutletContext();
    const posts = context.post[0];

    const [id, setId] = useState('');
    const [commentReader, setCommentReader] = useState('');
    const [postId, setPostId] = useState('');
    const [content, setContent] = useState('');
    const [posted, setPosted] = useState('');

    useEffect(() => {
        setId(commentToEdit.Id);
        setCommentReader(commentToEdit.Username);
        setPostId(commentToEdit.PostId ? commentToEdit.PostId : '');
        setContent(commentToEdit.Content);
        setPosted(commentToEdit.Posted ? commentToEdit.Posted.split("T")[0] : '');
    }, [commentToEdit])

    const updateComment = async (event) => {
        event.preventDefault();
        const newComment = { commentReader, postId, content, posted };
        const response = await fetch(`https://writers-block-serve.herokuapp.com/comments/${id}`, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // successful insert
        if (response.status === 200) {

            // re-render table
            const response = await fetch('https://writers-block-serve.herokuapp.com/comments');
            const comments = await response.json();
            setComments(comments);

            // clear input values
            setId('');
            setCommentReader('');
            setPostId('');
            setPosted('');
            setContent('');

        }
    };

    return (
        <div className="insert-form" id="add-comment-form">
            <form onSubmit={updateComment}>
                <div className='formContents'>
                    <p>Update Comment</p>
                    <div className='input-group'>
                        <label htmlFor="comment-id">Id:</label>
                        <input type="number"
                            name="comment-id"
                            id="comment-update-id"
                            value={id}
                            disabled
                            onChange={e => { setId(e.target.value) }}></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="comment-readerid">Reader:</label>
                        <select type="number"
                            name="comment-readerid"
                            id="comment-update-readerid"
                            defaultValue={''}
                            value={commentReader}
                            required
                            onChange={e => setCommentReader(e.target.value)}>
                            <option value="">Select a Reader</option>
                            {readers.map((reader, i) => <option key={i} value={reader.Username}>{reader.Username}</option>)}
                        </select>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="comment-postid">PostId</label>
                        <select type="number"
                            name="comment-postid"
                            id="comment-update-postid"
                            defaultValue={''}
                            value={postId}
                            required
                            onChange={e => setPostId(e.target.value)}>
                            <option value="">Select a PostId</option>
                            {posts.map((post, i) => <option key={i} value={post.Id}>{post.Id}</option>)}
                        </select>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="comment-update-date">Comment Date:</label>
                        <input type="date"
                            name="comment-date"
                            id="comment-update-date"
                            value={posted}
                            required
                            onChange={e => { setPosted(e.target.value) }}></input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="comment-update-content">Content:</label>
                        <textarea name="comment-content"
                            id="comment-update-content"
                            value={content}
                            required
                            onChange={e => setContent(e.target.value)}
                            rows="4"
                            cols="30"></textarea>
                    </div>
                    <button type="submit" className="update-button">UPDATE</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateComment;