import React from 'react';

function UpdateWriterReader({ setWritersReaders, writers, readers }) {

    
    return (
        <form className="update-form" id="update-writer-reader-form">
            <div className='formContents'>
                <p>Update WriterReader</p>
                <div className='input-group'>
                    <label htmlFor="writerReader-id">Id:</label>
                </div>
                <div className='input-group'>
                    <input type="number" name="writerReader-id" id="writerReader-id"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="update-readerid">Reader</label>
                    <select type="number" name="update-readerid" id="update-readerid" defaultValue={''}>
                        <option value="">Select a Reader</option>
                        {readers.map((reader, i) => <option key={i} value={reader.Id}>{reader.Username}</option>)}
                    </select>
                </div>
                <div className='input-group'>
                    <label  htmlFor="update-writerid">Writer</label>
                    <select type="number" name="update-writerid" id="update-writerid" defaultValue={''}>
                        <option value="">Select a Writer</option>
                        {writers.map((writer, i) => <option key={i} value={writer.Id}>{writer.Username}</option>)}
                    </select>
                </div>

                <button type="submit">UPDATE</button>
            </div>  
        </form>
    );
}

export default UpdateWriterReader;
