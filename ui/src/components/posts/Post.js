import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md'

function Post({ post, onDelete, onEdit }) {
    return (
        <tr className="list-row">
            <td>{post.Id}</td>
            <td>{post.Username}</td>
            <td>{post.Content}</td>
            <td>{post.Photo}</td>
            <td>{post.Posted.split("T")[0]}</td>
            <td><MdEdit className='toggle' onClick={ () => onEdit(post)} /></td>
            <td><MdDeleteForever className='toggle' onClick={ () => onDelete(post.Id)} /></td>
        </tr>
    );
}

export default Post;