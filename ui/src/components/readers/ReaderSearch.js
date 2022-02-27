import React, { useState } from 'react';

/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function ReaderSearch({ setReaders, readers }) {

    // search state
    const [username, setUsername] = useState('');

    // api calls
    const restore = async () => {
        const response = await fetch(' https://writers-block-serve.herokuapp.com/readers');
        const readers = await response.json();
        setReaders(readers);
    };
    
    const readerSearch = async () => {
        const response = await fetch(`https://writers-block-serve.herokuapp.com/readers/${username}`, {
            method: 'GET',
            mode: 'cors'
        });

        // successful insert
        if(response.status === 200){

            // re-render table
            const readers = await response.json();
            setReaders(readers);

        } else if (response.status === 404){
            alert("Reader not found.");
            restore();
        }

        // clear input values
        setUsername('');
    };

    return (
        <>
            <div className="search-form" id="search-reader-form-username">
                <div className='formContents'>
                    <p>Search Readers Table</p>
                    <div className='input-group'>
                        <label htmlFor="readerid">Search by Reader:</label>
                        <select type="number" 
                                name="readerid" 
                                id="search-readerid"
                                value={username}
                                onChange={e => setUsername(e.target.value)}>
                            <option value="">Select a Reader</option>
                            {readers.map((reader, i) => <option key={i} value={reader.Username}>{reader.Username}</option>)}
                        </select>
                    </div>
                    <button type="submit" onClick={readerSearch}>SUBMIT</button>
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

export default ReaderSearch;