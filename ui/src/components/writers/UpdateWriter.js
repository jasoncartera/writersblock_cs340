import React from 'react';

function UpdateWriter({ setWriters }) {

    
    return (
        <div className="update-form" id="update-writer-form">
            <div className='formContents'>
                <p>Update Writer</p>
                <div className='input-group'>
                    <label htmlFor="writer-id">Id:</label>
                    <input type="number" name="writer-id" id="writer-id"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="writer-username">Username:</label>
                    <input type="text" name="writer-username" id="writer-update-username"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="writer-email">Email:</label>
                    <input type="text" name="writer-email" id="writer-update-email"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="writer-photo">Update Photo:</label>
                    <input type="file" name="writer-photo" id="writer-update-photo"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="writer-date-joined">Date Joined:</label>
                    <input type="date" name="writer-date-joined" id="writer-update-date-joined"></input>
                </div>
                <button type="submit" className="update-button">UPDATE</button>
            </div>
        </div>
    );
}

export default UpdateWriter;