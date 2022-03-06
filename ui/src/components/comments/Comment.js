import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md'

function Comment({ comment, onDelete, onEdit }) {
    return (
        <tr className="list-row">
            <td>{comment.Id}</td>
            <td>{comment.Username}</td>
            <td>{comment.PostId}</td>
            <td>{comment.Content}</td>
            <td>{comment.Posted.split("T")[0]}</td>
            <td><MdEdit className='toggle' onClick={ () => onEdit(comment)} /></td>
            <td><MdDeleteForever className='toggle' onClick={ () => onDelete(comment.Id)} /></td>
        </tr>
    );
}

export default Comment;
