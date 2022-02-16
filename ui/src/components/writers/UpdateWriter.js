import React from 'react';

function UpdateWriter({ setWriters }) {

    
    return (
        <form className="update-form" id="update-writer-form">
            
            <p>Update Writer</p>
            
            <div>
                <input type="text" name="writer-input-username" id="writer-input-username" placeholder='Username'></input>
            </div>

            <div>
                <input type="text" name="writer-input-email" id="writer-input-email" placeholder='Email'></input>
            </div>

            <div>
                <label for="upload-photo">Upload photo:</label>
            </div>
            <div>
                <input type="file" name="writer-upload-photo" id="writer-upload-photo"></input>
            </div>

            <div>
                <label for="writer-date-joined">Date Joined:</label>
            </div>
            <div>
                <input type="date" name="writer-date-joined" id="writer-date-joined"></input>
            </div>

            <button type="submit">UPDATE</button>

        </form>
    );
}

export default UpdateWriter;