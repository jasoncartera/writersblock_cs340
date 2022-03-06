import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md'

function Reader({ reader, onDelete, onEdit }) {
    return (
        <tr className="list-row">
            <td>{reader.Id}</td>
            <td>{reader.Username}</td>
            <td>{reader.Email}</td>
            <td>{reader.Photo}</td>
            <td>{reader.DateJoined.split("T")[0]}</td>
            <td><MdEdit className='toggle' onClick={ () => onEdit( reader )} /></td>
            <td><MdDeleteForever className='toggle' onClick={ () => onDelete(reader.Id)} /></td>
        </tr>
    );
}

export default Reader;