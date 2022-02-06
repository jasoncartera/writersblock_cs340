import React from 'react';
import { Link } from "react-router-dom";

function Comments() {
    return (
        <>
            <h1>Manage Comments</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>ReaderId</th>
                        <th>PostId</th>
                        <th>Conent</th>
                        <th>Posted</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Placeholder</td>
                        <td>2022-02-05</td>
                        <td><button>Delete</button></td>
                        <td><button>Update</button></td>
                    </tr>
                </tbody>
            </table>

            <h2>Add a new Comment</h2>
            <form id="add-comment-form">
                <label for="comment-readerid">ReaderId</label>
                <input type="number" name="comment-readerid" id="comment-readerid"></input>

                <label for="comment-postid">PostId</label>
                <input type="number" name="comment-postid" id="comment-postid"></input>

                <label for="comment-conent">Content:</label>
                <input type="text" name="comment-conent" id="comment-conent"></input>

                <label for="comment-date">Comment Date:</label>
                <input type="date" name="comment-date" id="comment-date"></input>

                <input type="submit"></input>
            </form>

            <Link to="/">Home</Link>
        </>
    );
}

export default Comments;