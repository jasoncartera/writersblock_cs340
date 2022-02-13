import React from 'react';

function Reader({ reader }) {
    return (
        <tr className="Entity-page-row">
            <td>{reader.Id}</td>
            <td>{reader.Username}</td>
            <td>{reader.Email}</td>
            <td>{reader.Photo}</td>
            <td>{reader.DateJoined}</td>
            <td><button>Update</button></td>
            <td><button>Delete</button></td>
        </tr>
    );
}

export default Reader;