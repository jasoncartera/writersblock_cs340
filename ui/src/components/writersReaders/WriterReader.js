import React from 'react';

function WriterReader({ writerReader }) {
    return (
        <tr className="Entity-page-row">
            <td>{writerReader.Id}</td>
            <td>{writerReader.WriterId}</td>
            <td>{writerReader.ReaderId}</td>
            <td><button>Update</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
}

export default WriterReader;