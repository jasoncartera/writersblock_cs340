import React from 'react';
import { Link } from "react-router-dom";

function WritersReaders() {
    return (
        <>
            <h1>Manage WritersReaders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>WriterId</th>
                        <th>ReaderId</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td><button>Delete</button></td>
                        <td><button>Update</button></td>
                    </tr>
                </tbody>
            </table>

            <h2>Maintain WriterReaders Table</h2>
            <form id="writersreader-form">
                <label for="readerid">ReaderId:</label>
                <input type="number" name="readerid" id="readerid"></input>

                <label for="writerid">WriterId:</label>
                <input type="number" name="writerid" id="writerid"></input>

                <input type="submit"></input>
            </form>

            <Link to="/">Home</Link>
        </>
    );
}

export default WritersReaders;