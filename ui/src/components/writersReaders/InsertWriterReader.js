import React, { useState } from 'react';

/*
Citation for the following function:
Date: 2/27/2022
Adapted from: R.Byrd Portfolio Project, OSU CS290 F'21
Code available upon request.
*/
function InsertWriterReader({ setWritersReaders, readers, writers }) {

    // input state
    const [readerId, setReaderId] = useState('');
    const [writerId, setWriterId] = useState('');

    // api calls
    const insertWriterReader = async () => {
        const newWriterReader = { writerId, readerId };
        const response = await fetch('https://writers-block-serve.herokuapp.com/writersreaders', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(newWriterReader),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // successful insert
        if(response.status === 200){

            // re-render table
            const response = await fetch(' https://writers-block-serve.herokuapp.com/writersreaders');
            const wrs = await response.json();
            setWritersReaders(wrs);

            // clear input values
            setReaderId('');
            setWriterId('');
        }
    };
    
    return (
        <div className="insert-form" id="add-writer-reader-form">
            <div className='formContents'>
                <p>Insert New WriterReader</p>

                <div className='input-group'>
                    <label htmlFor="insert-readerid">Reader</label>
                    <select type="number" 
                            name="insert-readerid" 
                            id="insert-readerid" 
                            value={readerId}
                            onChange={e => setReaderId(e.target.value)}>
                        <option value="">Select a Reader</option>
                        {readers.map((reader, i) => <option key={i} value={reader.Id}>{reader.Username}</option>)}
                    </select>
                </div>
                
                <div className='input-group'>
                    <label htmlFor="insert-writerid">Writer</label>
                    <select type="number" 
                            name="insert-writerid" 
                            id="insert-writerid" 
                            value={writerId}
                            onChange={e => setWriterId(e.target.value)}>
                        <option value="">Select a Writer</option>
                        {writers.map((writer, i) => <option key={i} value={writer.Id}>{writer.Username}</option>)}
                    </select>
                </div>

                <button type="submit" onClick={insertWriterReader}>SUBMIT</button>
            </div>       
        </div>
    );
}

export default InsertWriterReader;
