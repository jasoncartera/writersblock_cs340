import React from 'react';

function UpdateReader({ setReaders, reader }) {

    
    return (
        <form className="update-form" id="update-reader-form">
            
            <p>Update Reader</p>            
            <div>
                <input type="text" name="reader-input-username" id="reader-input-username" placeholder='Username'></input>
            </div>

            <div>
                <input type="text" name="reader-input-email" id="reader-input-email" placeholder='Email'></input>
            </div>
            
            <div>
                <label for="upload-photo">Upload photo:</label>
            </div>
            <div>
                <input type="file" name="reader-upload-photo" id="reader-upload-photo"></input>
            </div>

            <div>
                <label for="reader-date-joined">Date Joined:</label>
            </div>
            <div>
                <input type="date" name="reader-date-joined" id="reader-date-joined"></input>
            </div>

            <button type="submit">UPDATE</button>
                    
        </form>
    );
}

export default UpdateReader;