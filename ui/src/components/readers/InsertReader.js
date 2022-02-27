import React, { useState } from 'react';

/*
Citation for the following function:
Date: 2/27/2022
Adapted from: R.Byrd Portfolio Project, OSU CS290 F'21
Code available upon request.
*/
function InsertReader({ setReaders }) {

    // input state
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [datejoined, setDateJoined] = useState('');

    // api calls
    const insertReader = async () => {
        const newReader = { username, email, photo, datejoined };
        const response = await fetch('https://writers-block-serve.herokuapp.com/readers', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(newReader),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // successful insert
        if(response.status === 200){

            // re-render table
            const response = await fetch(' https://writers-block-serve.herokuapp.com/readers');
            const readers = await response.json();
            setReaders(readers);

            // clear input values
            setUsername('');
            setEmail('');
            setPhoto('');
            setDateJoined('');

        }
    };

    
    return (
        <div className="insert-form" id="add-reader-form">
            <div className='formContents'>
                <p>Insert New Reader</p>            
                <div className='input-group'>
                    <label htmlFor="reader-username">Username:</label>
                    <input  type="text" 
                            name="reader-username" 
                            id="reader-username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}>
                    </input>
                </div>

                <div className='input-group'>
                    <label htmlFor="reader-email">Email:</label>
                    <input  type="text" 
                            name="reader-email" 
                            id="reader-email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}>
                    </input>
                </div>
                
                <div className='input-group'>
                    <label htmlFor="reader-photo">Upload photo:</label>
                    <input  type="file" 
                            name="reader-photo" 
                            id="reader-photo"
                            value={photo}
                            onChange={e => setPhoto(e.target.value)}>
                    </input>
                </div>

                <div className='input-group'>
                <label htmlFor="reader-date-joined">Date Joined:</label>
                    <input  type="date" 
                            name="reader-date-joined" 
                            id="reader-date-joined"
                            value={datejoined}
                            onChange={e => setDateJoined(e.target.value)}>
                    </input>
                </div>

                <button type="submit" onClick={insertReader}>SUBMIT</button>
            </div>              
        </div>
    );
}

export default InsertReader;