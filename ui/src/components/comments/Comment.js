import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md'

function Comment({ comment, onDelete }) {
    return (
        <tr className="list-row">
            <td>{comment.Id}</td>
            <td>{comment.Username}</td>
            <td>{comment.PostId}</td>
            <td>{comment.Content}</td>
            <td>{comment.Posted}</td>
            <td><MdEdit className='toggle' /></td>
            <td><MdDeleteForever className='toggle' onClick={ () => onDelete(comment.Id)} /></td>
        </tr>
    );
}

export default Comment;
