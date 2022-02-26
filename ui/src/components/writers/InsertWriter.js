import React from 'react';

function InsertWriter({ setWriters }) {

    
    return (
        <form className="insert-form" id="add-writer-form">
            <div className='formContents'>
                <p>Insert New Writer</p>
                <div className='input-group'>
                    <label htmlFor="writer-username">Username:</label>
                    <input type="text" name="writer-username" id="writer-username"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="writer-email">Email:</label>
                    <input type="text" name="writer-email" id="writer-email"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="writer-photo">Upload photo:</label>
                    <input type="file" name="writer-photo" id="writer-photo"></input>
                </div>
                <div className='input-group'>
                    <label htmlFor="writer-date-joined">Date Joined:</label>
                    <input type="date" name="writer-date-joined" id="writer-date-joined"></input>
                </div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
}

export default InsertWriter;