import React from 'react';
import Comment from './Comment';

function CommentList({ comments }) {
    return (
        <table id="comments" className="Entity-page-table">
            <thead>
                <tr className="Entity-page-row">
                    <th>Id</th>
                    <th>ReaderId</th>
                    <th>PostId</th>
                    <th>Content</th>
                    <th>Posted</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr className="Entity-page-row">
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>Placeholder</td>
                    <td>2022-02-05</td>
                    <td><button>Update</button></td>
                    <td><button>Delete</button></td>
                </tr>
                {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </tbody>
        </table>
    );
}

export default CommentList;