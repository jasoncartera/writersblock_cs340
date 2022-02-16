import React from 'react';

function InsertWriterReader({ setWritersReaders }) {

    
    return (
        <form className="insert-form" id="add-writer-reader-form">

            <p>Insert New WriterReader</p>
            
            <div>
                <label for="readerid">ReaderId:</label>
                <input type="number" name="readerid" id="readerid"></input>
            </div>
            
            <div>
                <label for="writerid">WriterId:</label>
                <input type="number" name="writerid" id="writerid"></input>
            </div>

            <button type="submit">SUBMIT</button>
                    
        </form>
    );
}

export default InsertWriterReader;

/*
      <form className="insert-form" id="add-writer-reader-form">

            <p>Insert New WriterReader</p>
            
            <div>
                <label for="insert-readerid">ReaderId</label>
                <select type="number" name="insert-readerid" id="insert-readerid">
                    <option value="" selected>Select a Reader</option>
                    {readers.map((reader, i) => <option value={reader.Id}>{reader.Username}</option>)}
                </select>
            </div>
            
            <div>
                <label for="insert-writerid">WriterId</label>
                <select type="number" name="insert-writerid" id="insert-writerid">
                    <option value="" selected>Select a Writer</option>
                    {writers.map((writer, i) => <option value={writer.Id}>{writer.Username}</option>)}
                </select>
            </div>

            <button type="submit">SUBMIT</button>
                    
        </form>
 */