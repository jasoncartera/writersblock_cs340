import React from 'react';

function InsertReader({ setReaders }) {

    
    return (
        <form className="Entity-page-form" id="add-reader-form">
            
            <fieldset>
                <legend>Insert New Reader</legend>
            
                    <label for="reader-input-username">Username:</label>
                    <input type="text" name="reader-input-username" id="reader-input-username"></input>

                    <label for="reader-input-email">Email:</label>
                    <input type="text" name="reader-input-email" id="reader-input-email"></input>

                    <label for="upload-photo">Upload photo:</label>
                    <input type="file" name="reader-upload-photo" id="reader-upload-photo"></input>

                    <label for="reader-date-joined">Date Joined:</label>
                    <input type="date" name="reader-date-joined" id="reader-date-joined"></input>

                    <input type="submit"></input>
                    
            </fieldset>
        </form>
    );
}

export default InsertReader;