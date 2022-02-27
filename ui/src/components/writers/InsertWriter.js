import React, { useState } from 'react';

/*
Citation for the following function:
Date: 2/27/2022
Adapted from: R.Byrd Portfolio Project, OSU CS290 F'21
Code available upon request.
*/
function InsertWriter({ setWriters }) {

    // input state
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [datejoined, setDateJoined] = useState('');

    const insertWriter = async () => {
        const newWriter = { username, email, photo, datejoined };
        const response = await fetch('https://writers-block-serve.herokuapp.com/writers', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(newWriter),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // successful insert
        if(response.status === 200){

            // re-render table
            const response = await fetch(' https://writers-block-serve.herokuapp.com/writers');
            const writers = await response.json();
            setWriters(writers);

            // clear input values
            setUsername('');
            setEmail('');
            setPhoto('');
            setDateJoined('');

        }
    };

    return (
        <div className="insert-form" id="add-writer-form">
            <div className='formContents'>
                <p>Insert New Writer</p>
                <div className='input-group'>
                    <label htmlFor="writer-username">Username:</label>
                    <input  type="text" 
                            name="writer-username" 
                            id="writer-username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}>
                    </input>
                </div>
                <div className='input-group'>
                    <label htmlFor="writer-email">Email:</label>
                    <input  type="text" 
                            name="writer-email" 
                            id="writer-email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}>
                    </input>
                </div>
                <div className='input-group'>
                    <label htmlFor="writer-photo">Upload photo:</label>
                    <input  type="file" 
                            name="writer-photo" 
                            id="writer-photo"
                            value={photo}
                            onChange={e => setPhoto(e.target.value)}>
                    </input>
                </div>
                <div className='input-group'>
                    <label htmlFor="writer-date-joined">Date Joined:</label>
                    <input  type="date" 
                            name="writer-date-joined" 
                            id="writer-date-joined"
                            value={datejoined}
                            onChange={e => setDateJoined(e.target.value)}>
                    </input>
                </div>
                <button type="submit" onClick={insertWriter}>SUBMIT</button>
            </div>
        </div>
    );
}

export default InsertWriter;