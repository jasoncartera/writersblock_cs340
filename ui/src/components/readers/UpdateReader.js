import React from 'react';

function UpdateReader({ setReaders, reader }) {

    
    return (
        <div className="update-form" id="update-reader-form">
            <div className='formContents'>
                <p>Update Reader</p>  
                <div className='input-group'>
                    <label htmlFor="reader-id">Id:</label>
                    <input type="number" name="reader-id" id="reader-update-id"></input>
                </div>

                <div className='input-group'>
                    <label htmlFor="reader-username">Username:</label>
                    <input type="text" name="reader-username" id="reader-update-username"></input>
                </div>

                <div className='input-group'>
                    <label htmlFor="reader-email">Email:</label>
                    <input type="text" name="reader-email" id="reader-update-email"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="reader-photo">Update Photo:</label>
                    <input type="file" name="reader-photo" id="reader-update-photo"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="reader-date-joined">Date Joined:</label>
                    <input type="date" name="reader-date-joined" id="reader-update-date-joined"></input>
                </div>

                <button type="submit" className="update-button">UPDATE</button>
            </div>   
        </div>
    );
}

export default UpdateReader;