import React, { useState, useRef, useEffect } from 'react';

function UpdateWriter({ setWriters, writerToEdit }) {


    const [id, setId] = useState(writerToEdit.Id);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [datejoined, setDateJoined] = useState('');
    const [file, setFile] = useState();
    const imgRef = useRef(writerToEdit.Photo);

    useEffect(() => {
        setId(writerToEdit.Id);
        setUsername(writerToEdit.Username);
        setEmail(writerToEdit.Email);
        setDateJoined(writerToEdit.DateJoined);
    })

    const fileSelected = event => {
        const file = event.target.files[0];
        setFile(file);
    }

    // Api call
    const updateWriter = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("datejoined", datejoined);
        if (file) {
            formData.append("writerPhoto", file);
        } else {
            formData.append("photo", writerToEdit.Photo);
        }

        const response = await fetch(`http://localhost:3000/writers/${writerToEdit.Id}`, {
            method: 'PUT',
            mode: 'cors',
            body: formData
        });

        // successful insert
        if (response.status === 200) {

            // re-render table
            const response = await fetch('https://writers-block-serve.herokuapp.com/writers');
            const writers = await response.json();
            setWriters(writers);

            // clear input values
            setId('')
            setUsername('');
            setEmail('');
            setDateJoined('');
            imgRef.current.value = '';
        }

    };

    return (
        <div className="update-form" id="update-writer-form">
            <form onSubmit={updateWriter} encType="multipart/form-data">
                <div className='formContents'>
                    <p>Update Writer</p>
                    <div className='input-group'>
                        <label htmlFor="writerId">Id:</label>
                        <input type="number"
                            name="writerId"
                            id="writer-id"
                            value={id}
                            onChange={e => {setId(e.target.value)}}>
                        </input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="updateWriterUsername">Username:</label>
                        <input type="text"
                            name="updateWriterUsername"
                            id="writer-update-username"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }}>
                        </input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="updateWriterEmail">Email:</label>
                        <input type="text"
                            name="updateWriterEmail"
                            id="writer-update-email"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}>
                        </input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="updateWriterPhoto">Update Photo:</label>
                        <input type="file"
                            name="updateWriterPhoto"
                            id="writer-update-photo"
                            ref={imgRef}
                            onChange={fileSelected}>
                        </input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="writerDateJoined">Date Joined:</label>
                        <input type="date"
                            name="writerDateJoined"
                            id="writer-update-date-joined">
                        </input>
                    </div>
                    <button type="submit" className="update-button">UPDATE</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateWriter;