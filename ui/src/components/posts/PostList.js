import React from 'react';
import Post from './Post';

function PostList({ posts }) {
    return (

        <table id="posts" className="Entity-page-table">
            <thead>
                <tr className="Entity-page-row">
                    <th>Id</th>
                    <th>WriterId</th>
                    <th>Content</th>
                    <th>Photo</th>
                    <th>Posted</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr className="Entity-page-row">
                    <td>1</td>
                    <td>1</td>
                    <td>Placeholder</td>
                    <td>/path</td>
                    <td>2022-02-05</td>
                    <td><button>Update</button></td>
                    <td><button>Delete</button></td>
                </tr>
                {posts.map((post, i) => <Post post={post} key={i} />)}
            </tbody>
        </table>
    );
}

export default PostList;