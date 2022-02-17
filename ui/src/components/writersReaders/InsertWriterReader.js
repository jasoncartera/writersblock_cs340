import React from 'react';

function InsertWriterReader({ setWritersReaders, readers, writers }) {

    
    return (
        <form className="insert-form" id="add-writer-reader-form">
            <div className='formContents'>
                <p>Insert New WriterReader</p>

                <div className='input-group'>
                    <label for="insert-readerid">Reader</label>
                    <select type="number" name="insert-readerid" id="insert-readerid">
                        <option value="" selected>Select a Reader</option>
                        {readers.map((reader, i) => <option value={reader.Id}>{reader.Username}</option>)}
                    </select>
                </div>
                
                <div className='input-group'>
                    <label for="insert-writerid">Writer</label>
                    <select type="number" name="insert-writerid" id="insert-writerid">
                        <option value="" selected>Select a Writer</option>
                        {writers.map((writer, i) => <option value={writer.Id}>{writer.Username}</option>)}
                    </select>
                </div>

                <button type="submit">SUBMIT</button>
            </div>       
        </form>
    );
}

export default InsertWriterReader;
