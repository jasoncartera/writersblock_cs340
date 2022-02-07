import React from 'react';
import { Link } from "react-router-dom";

function WritersReaders() {
    return (
        <>
            <div className="Entity-header">

                <h1>Manage WritersReaders</h1>
                <Link to="/">Home</Link>
            </div>
            <div className="Entity-page">
                <div className="right-panel">
                    <table className="Entity-page-table">
                        <thead>
                            <tr className="Entity-page-row">
                                <th>Id</th>
                                <th>WriterId</th>
                                <th>ReaderId</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="Entity-page-row">
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td><button>Delete</button></td>
                                <td><button>Update</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="left-panel">
                    <form className="Entity-page-form" id="writersreader-form">
                        <label for="readerid">ReaderId:</label>
                        <input type="number" name="readerid" id="readerid"></input>

                        <label for="writerid">WriterId:</label>
                        <input type="number" name="writerid" id="writerid"></input>

                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        </>
    );
}

export default WritersReaders;