import React, { useState, useEffect, useRef } from 'react';

function UpdateReader({ setReaders, readerToEdit }) {

    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [datejoined, setDateJoined] = useState('');
    const [photo, setPhoto] = useState('');
    const [file, setFile] = useState(null);
    const imgRef = useRef(null);

    useEffect(() => {
        setId(readerToEdit.Id);
        setUsername(readerToEdit.Username);
        setEmail(readerToEdit.Email);
        setDateJoined(readerToEdit.DateJoined ? readerToEdit.DateJoined.split("T")[0] : '');
        setPhoto(readerToEdit.Photo);
    }, [readerToEdit])

    const fileSelected = event => {
        const file = event.target.files[0];
        setFile(file);
    }

    // Api call
    const updateReader = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("datejoined", datejoined);
        if (file) {
            formData.append("updateReaderPhoto", file);
        } else {
            formData.append("photo", photo ? photo : "");
        }

        const response = await fetch(`https://writers-block-serve.herokuapp.com/readers/${id}`, {
            method: 'PUT',
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
            setId('')
            setUsername('');
            setEmail('');
            setDateJoined('');
            imgRef.current.value = null;
        }

    };

    return (
        <div className="update-form" id="update-reader-form">
            <form onSubmit={updateReader} encType="multipart/form-data">
                <div className='formContents'>
                    <p>Update Reader</p>
                    <div className='input-group'>
                        <label htmlFor="readerId">Id:</label>
                        <input type="number" 
                        name="readerId" 
                        id="reader-update-id"
                        value={id}
                        onChange={e => {setId(e.target.value)}}>
                        </input>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="readerUsername">Username:</label>
                        <input type="text" 
                        name="readerUsername" 
                        id="reader-update-username"
                        value={username}
                        onChange={e => {setUsername(e.target.value)}}>
                        </input>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="readerEmail">Email:</label>
                        <input type="text" 
                        name="readerEmail" 
                        id="reader-update-email"
                        value={email}
                        onChange={e => {setEmail(e.target.value)}}>
                        </input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="updateReaderPhoto">Update Photo:</label>
                        <input type="file" 
                        name="updateReaderPhoto" 
                        id="reader-update-photo"
                        accept="image/*"
                        ref={imgRef}
                        onChange={fileSelected}>
                        </input>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="readerDateJoined">Date Joined:</label>
                        <input type="date" 
                        name="readerDateJoined" 
                        id="reader-update-date-joined"
                        value={datejoined}
                        onChange={e => {setDateJoined(e.target.value)}}>
                        </input>
                    </div>
                    <button type="submit" className="update-button">UPDATE</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateReader;