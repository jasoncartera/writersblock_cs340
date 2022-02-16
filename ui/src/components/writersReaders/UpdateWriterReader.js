import React from 'react';

function UpdateWriterReader({ setWritersReaders, writerReader }) {

    
    return (
        <form className="update-form" id="update-writer-reader-form">

            <p>Update Writer</p>
            
            <div>
                <label for="readerid">ReaderId:</label>
                <input type="number" name="readerid" id="readerid"></input>
            </div>
            
            <div>
                <label for="writerid">WriterId:</label>
                <input type="number" name="writerid" id="writerid"></input>
            </div>

            <button type="submit">UPDATE</button>
                    
        </form>
    );
}

export default UpdateWriterReader;

/*
        <form className="update-form" id="update-writer-reader-form">

            <p>Update WriterReader</p>
            
            <div>
                <label for="update-readerid">ReaderId</label>
                <select type="number" name="update-readerid" id="update-readerid">
                    <option value="" selected>Select a Reader</option>
                    {readers.map((reader, i) => <option value={reader.Id}>{reader.Username}</option>)}
                </select>
            </div>
            
            <div>
                <label for="update-writerid">WriterId</label>
                <select type="number" name="update-writerid" id="update-writerid">
                    <option value="" selected>Select a Writer</option>
                    {writers.map((writer, i) => <option value={writer.Id}>{writer.Username}</option>)}
                </select>
            </div>

            <button type="submit">UPDATE</button>
                    
        </form>
 */