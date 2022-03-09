import React, { useState, useRef } from 'react';

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
    const [file, setFile] = useState(null);
    const [datejoined, setDateJoined] = useState('');
    const imgRef = useRef(null);

    const fileSelected = event => {
        const file = event.target.files[0];
        setFile(file);
    }

    // api calls
    const insertReader = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("readerPhoto", file);
        formData.append("datejoined", datejoined);

        const response = await fetch('https://writers-block-serve.herokuapp.com/readers', {
            method: 'POST',
            mode: 'cors',
            body: formData
        });

        // successful insert
        if (response.status === 200) {

            // re-render table
            const response = await fetch('https://writers-block-serve.herokuapp.com/readers');
            const readers = await response.json();
            setReaders(readers);

            // clear input values
            setUsername('');
            setEmail('');
            setDateJoined('');
            imgRef.current.value = null;
        }
    };


    return (
        <div className="insert-form" id="add-reader-form">
            <form onSubmit={insertReader} encType="multipart/form-data">
                <div className='formContents'>
                    <p>Insert New Reader</p>
                    <div className='input-group'>
                        <label htmlFor="reader-username">Username:</label>
                        <input type="text"
                            name="reader-username"
                            id="reader-username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            required>
                        </input>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="reader-email">Email:</label>
                        <input type="email"
                            name="reader-email"
                            id="reader-email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required>
                        </input>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="readerPhoto">Upload photo:</label>
                        <input type="file"
                            name="readerPhoto"
                            id="reader-photo"
                            accept="image/*"
                            ref={imgRef}
                            onChange={fileSelected}>
                        </input>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="reader-date-joined">Date Joined:</label>
                        <input type="date"
                            name="reader-date-joined"
                            id="reader-date-joined"
                            value={datejoined}
                            onChange={e => setDateJoined(e.target.value)}
                            required>
                        </input>
                    </div>

                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default InsertReader;