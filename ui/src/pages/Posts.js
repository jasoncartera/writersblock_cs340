import React from 'react';
import { Link } from "react-router-dom";

function Posts() {
    return (
        <>
            <div className="Entity-header">
                <h1>Manage Posts</h1>
                <Link to="/">Home</Link>
            </div>
            <div className="Entity-page">
                <div className="right-panel">
                    <table className="Entity-page-table">
                        <thead>
                            <tr className="Entity-page-row">
                                <th>Id</th>
                                <th>WriterId</th>
                                <th>Content</th>
                                <th>Photo</th>
                                <th>Posted</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="Entity-page-row">
                                <td>1</td>
                                <td>1</td>
                                <td>Placeholder</td>
                                <td>/path</td>
                                <td>2022-02-05</td>
                                <td><button>Delete</button></td>
                                <td><button>Update</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="left-panel">
                    <form className="Entity-page-form" id="add-post-form">
                        <label for="post-input-writerid">WriterId</label>
                        <input type="number" name="post-input-writerid" id="post-input-writerid"></input>

                        <label for="post-conent">Content:</label>
                        <input type="text" name="post-conent" id="post-conent"></input>

                        <label for="post-photo">Upload photo:</label>
                        <input type="file" name="post-photo" id="post-photo"></input>

                        <label for="post-date">Post Date:</label>
                        <input type="date" name="post-date" id="post-date"></input>

                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Posts;