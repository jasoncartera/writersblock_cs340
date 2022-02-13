import React from 'react';

function Post({ post }) {
    return (
        <tr className="Entity-page-row">
            <td>{post.Id}</td>
            <td>{post.WriterId}</td>
            <td>{post.Content}</td>
            <td>{post.Photo}</td>
            <td>{post.Posted}</td>
            <td><button>Update</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
}

export default Post;