import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md'

function Reader({ reader, onDelete }) {
    return (
        <tr className="list-row">
            <td>{reader.Id}</td>
            <td>{reader.Username}</td>
            <td>{reader.Email}</td>
            <td>{reader.Photo}</td>
            <td>{reader.DateJoined}</td>
            <td><MdEdit className='toggle' /></td>
            <td><MdDeleteForever className='toggle' onClick={ () => onDelete(reader.Id)} /></td>
        </tr>
    );
}

export default Reader;