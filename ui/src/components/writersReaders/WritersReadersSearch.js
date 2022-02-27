import React, { useState } from 'react';

/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function WritersReadersSearch({ setWritersReaders, writers, readers }) {

    // search state
    const [writer, setWriter] = useState('');
    const [reader, setReader] = useState('');

    // api calls
    const restore = async () => {
        const response = await fetch(' https://writers-block-serve.herokuapp.com/writersreaders');
        const wrs = await response.json();
        setWritersReaders(wrs);
    };

    const wrsSearchReader = async () => {
        const response = await fetch(`https://writers-block-serve.herokuapp.com/writersreaders/reader/${reader}`, {
            method: 'GET',
            mode: 'cors'
        });

        // successful insert
        if(response.status === 200){

            // re-render table
            const wrs = await response.json();
            setWritersReaders(wrs);

        } else if (response.status === 404){
            alert("Reader not found as a follower of a writer.");
            restore();
        }

        // clear input values
        setReader('');
    };
    
    const wrsSearchWriter = async () => {
        const response = await fetch(`https://writers-block-serve.herokuapp.com/writersreaders/writer/${writer}`, {
            method: 'GET',
            mode: 'cors'
        });

        // successful insert
        if(response.status === 200){

            // re-render table
            const wrs = await response.json();
            setWritersReaders(wrs);

        } else if (response.status === 404){
            alert("Writer not followed by any readers.");
            restore();
        }

        // clear input values
        setWriter('');
    };
    
    return (
        <>
            <div className="search-form" id="search-writer-form">
                <div className='formContents'>
                    <p>Search WritersReaders</p>
                        <div className='input-group'>
                            <label htmlFor="writerid">Search by Writer:</label>
                            <select type="number" 
                                    name="writerid" 
                                    id="search-writerid"
                                    value={writer}
                                    onChange={e => setWriter(e.target.value)}>
                                <option value="">Select a Writer</option>
                                {writers.map((writer, i) => <option key={i} value={writer.Username}>{writer.Username}</option>)}
                            </select>
                        </div>
                    <button type="submit" onClick={wrsSearchWriter}>SUBMIT</button>
                </div>
            </div>
            <br></br>
            <div className="search-form" id="search-reader-form-username">
                <div className='formContents'>
                    <div className='input-group'>
                        <label htmlFor="readerid">Search by Reader:</label>
                        <select type="number" 
                                name="readerid" 
                                id="search-readerid" 
                                value={reader}
                                onChange={e => setReader(e.target.value)}>
                            <option value="">Select a Reader</option>
                            {readers.map((reader, i) => <option key={i} value={reader.Username}>{reader.Username}</option>)}
                        </select>
                    </div>
                    <button type="submit" onClick={wrsSearchReader}>SUBMIT</button>
                </div>
            </div> 

            <br></br>
            <br></br>
            
            <div className="search-form" id="restore">
                <div className='formContents'>      
                    <button type="submit" onClick={restore}>Restore Original Table</button>
                </div>
            </div>
        </>
    );
}

export default WritersReadersSearch;