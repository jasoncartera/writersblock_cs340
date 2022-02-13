import React from 'react';

function Writer({ writer }) {
    return (
        <tr className="Entity-page-row">
            <td>{writer.Id}</td>
            <td>{writer.Username}</td>
            <td>{writer.Email}</td>
            <td>{writer.Photo}</td>
            <td>{writer.DateJoined}</td>
            <td><button>Update</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
}

export default Writer;