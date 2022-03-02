import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md'

function Post({ post, onDelete }) {
    return (
        <tr className="list-row">
            <td>{post.Id}</td>
            <td>{post.Username}</td>
            <td>{post.Content}</td>
            <td>{post.Photo}</td>
            <td>{post.Posted}</td>
            <td><MdEdit className='toggle' /></td>
            <td><MdDeleteForever className='toggle' onClick={ () => onDelete(post.Id)} /></td>
        </tr>
    );
}

export default Post;