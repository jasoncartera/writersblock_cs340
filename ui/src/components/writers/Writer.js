import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md'

function Writer({ writer, onDelete, onEdit }) {
    return (
        <tr className="list-row">
            <td>{writer.Id}</td>
            <td>{writer.Username}</td>
            <td>{writer.Email}</td>
            <td>{writer.Photo}</td>
            <td>{writer.DateJoined.split("T")[0]}</td>
            <td><MdEdit onClick={ () => onEdit( writer )}/></td>
            <td><MdDeleteForever onClick={ () => onDelete(writer.Id)} /></td>
        </tr>
    );
}

export default Writer;