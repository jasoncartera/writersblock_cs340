import React, { useState } from 'react';

/*
Citation for the following function:
Date: 2/27/2022
Adapted from: R.Byrd Portfolio Project, OSU CS290 F'21
Code available upon request.

Citation for file upload:
Date: 2/28/2022
https://www.youtube.com/watch?v=NZElg91l_ms&ab_channel=SamMeech-Ward
*/
function InsertWriter({ setWriters }) {
    
    // input state
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [datejoined, setDateJoined] = useState('');
    const [file, setFile] = useState();

    const fileSelected = event => {
        const file = event.target.files[0];
        setFile(file);
    }

    // api calls
    const insertWriter = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("writerPhoto", file);
        formData.append("datejoined", datejoined);

        const response = await fetch('https://writers-block-serve.herokuapp.com/writers', {
            method: 'POST',
            mode: 'cors',
            body: formData
        });

        // successful insert
        if (response.status === 200) {

            // re-render table
            const response = await fetch(' https://writers-block-serve.herokuapp.com/writers');
            const writers = await response.json();
            setWriters(writers);

            // clear input values
            setUsername('');
            setEmail('');
            setDateJoined('');
            setPhoto('');
        }

    };


    return (
        <div className="insert-form" id="add-writer-form">
            <form onSubmit={insertWriter} encType="multipart/form-data">
                <div className='formContents'>
                    <p>Insert New Writer</p>
                    <div className='input-group'>
                        <label htmlFor="writerUsername">Username:</label>
                        <input type="text"
                            name="writerUsername"
                            id="writer-username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}>
                        </input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="writerEmail">Email:</label>
                        <input type="text"
                            name="writerEmail"
                            id="writer-email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}>
                        </input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="writerPhoto">Upload photo:</label>
                        <input type="file"
                            name="writerPhoto"
                            id="writer-photo"
                            accept="image/*"
                            value={photo}
                            onChange={fileSelected}>
                        </input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="writerDateJoined">Date Joined:</label>
                        <input type="date"
                            name="writerDateJoined"
                            id="writer-date-joined"
                            value={datejoined}
                            onChange={e => setDateJoined(e.target.value)}>
                        </input>
                    </div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    );
}

export default InsertWriter;