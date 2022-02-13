import React from 'react';
import Writer from './Writer';

function WriterList({ writers }) {
    return (

        <table id="writers" className="Entity-page-table">
            <thead>
                <tr className="Entity-page-row">
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Photo</th>
                    <th>DateJoined</th>
                    <th>Update</th>
                    <th>Delete</th>
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
                {writers.map((writer, i) => <Writer writer={writer} key={i} />)}
            </tbody>
        </table>
    );
}

export default WriterList;