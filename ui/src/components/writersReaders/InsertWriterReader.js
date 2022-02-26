import React from 'react';

function InsertWriterReader({ setWritersReaders, readers, writers }) {

    
    return (
        <form className="insert-form" id="add-writer-reader-form">
            <div className='formContents'>
                <p>Insert New WriterReader</p>

                <div className='input-group'>
                    <label htmlFor="insert-readerid">Reader</label>
                    <select type="number" name="insert-readerid" id="insert-readerid" defaultValue={''}>
                        <option value="">Select a Reader</option>
                        {readers.map((reader, i) => <option key={i} value={reader.Id}>{reader.Username}</option>)}
                    </select>
                </div>
                
                <div className='input-group'>
                    <label htmlFor="insert-writerid">Writer</label>
                    <select type="number" name="insert-writerid" id="insert-writerid" defaultValue={''}>
                        <option value="">Select a Writer</option>
                        {writers.map((writer, i) => <option key={i} value={writer.Id}>{writer.Username}</option>)}
                    </select>
                </div>

                <button type="submit">SUBMIT</button>
            </div>       
        </form>
    );
}

export default InsertWriterReader;
