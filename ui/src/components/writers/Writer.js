import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md'

function Writer({ writer, onDelete }) {
    return (
        <tr className="list-row">
            <td>{writer.Id}</td>
            <td>{writer.Username}</td>
            <td>{writer.Email}</td>
            <td>{writer.Photo}</td>
            <td>{writer.DateJoined}</td>
            <td><MdEdit className='toggle' /></td>
            <td><MdDeleteForever className='toggle' onClick={ () => onDelete(writer.Id)} /></td>
        </tr>
    );
}

export default Writer;