import React from 'react';
import {MdDeleteForever, MdEdit} from 'react-icons/md'

function WriterReader({ writerReader, onDelete }) {
    return (
        <tr className="list-row">
            <td>{writerReader.Id}</td>
            <td>{writerReader.Writer}</td>
            <td>{writerReader.Reader}</td>
            <td><MdDeleteForever onClick={ () => onDelete(writerReader.Id)}/></td>
        </tr>
    );
}

export default WriterReader;