import React from 'react';

function Comment({ comment }) {
    return (
        <tr className="Entity-page-row">
            <td>{comment.Id}</td>
            <td>{comment.ReaderId}</td>
            <td>{comment.PostId}</td>
            <td>{comment.Content}</td>
            <td>{comment.Posted}</td>
            <td><button>Update</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
}

export default Comment;
