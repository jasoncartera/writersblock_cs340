import React from 'react';
import { Link } from "react-router-dom";

function Readers() {
    return (
        <>
            <div className="Entity-header">
                <h1>Manage Readers</h1>
                <Link to="/">Home</Link>
            </div>
            <div className="Entity-page">
                <div className="right-panel">
                    <table className="Entity-page-table">
                        <thead>
                            <tr className="Entity-page-row">
                                <th>Id</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Photo</th>
                                <th>DateJoined</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="Entity-page-row">
                                <td>1</td>
                                <td>Placeholder</td>
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
                    <form className="Entity-page-form" id="add-reader-form">
                        <label for="reader-input-username">Username:</label>
                        <input type="text" name="reader-input-username" id="reader-input-username"></input>

                        <label for="reader-input-email">Email:</label>
                        <input type="text" name="reader-input-email" id="reader-input-email"></input>

                        <label for="upload-photo">Upload photo:</label>
                        <input type="file" name="reader-upload-photo" id="reader-upload-photo"></input>

                        <label for="reader-date-joined">Username:</label>
                        <input type="date" name="reader-date-joined" id="reader-date-joined"></input>

                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Readers;