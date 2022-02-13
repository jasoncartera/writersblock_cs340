import React from 'react';
import WriterReader from './WriterReader';

function WriterReaderList({ writersReaders }) {
    return (

        <table id="writersReaders" className="Entity-page-table">
            <thead>
                <tr className="Entity-page-row">
                    <th>Id</th>
                    <th>WriterId</th>
                    <th>ReaderId</th>
                    <th>Update</th>
                    <th>Delete</th>
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
                {writersReaders.map((writerReader, i) => <WriterReader writerReader={writerReader} key={i} />)}
            </tbody>
        </table>
    );
}

export default WriterReaderList;