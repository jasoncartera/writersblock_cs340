import React from 'react';

function InsertWriter({ setWriters }) {

    
    return (
        <form className="Entity-page-form" id="add-writer-form">
            
            <fieldset>
                <legend>Insert New Writer</legend>
            
                <label for="writer-input-username">Username:</label>
                <input type="text" name="writer-input-username" id="writer-input-username"></input>

                <label for="writer-input-email">Email:</label>
                <input type="text" name="writer-input-email" id="writer-input-email"></input>

                <label for="upload-photo">Upload photo:</label>
                <input type="file" name="writer-upload-photo" id="writer-upload-photo"></input>

                <label for="writer-date-joined">Date Joined:</label>
                <input type="date" name="writer-date-joined" id="writer-date-joined"></input>
                    
            </fieldset>
        </form>
    );
}

export default InsertWriter;