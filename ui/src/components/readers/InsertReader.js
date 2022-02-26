import React from 'react';

function InsertReader({ setReaders }) {

    
    return (
        <form className="insert-form" id="add-reader-form">
            <div className='formContents'>
                <p>Insert New Reader</p>            
                <div className='input-group'>
                    <label htmlFor="reader-username">Username:</label>
                    <input type="text" name="reader-username" id="reader-username"></input>
                </div>

                <div className='input-group'>
                    <label htmlFor="reader-email">Email:</label>
                    <input type="text" name="reader-email" id="reader-email"></input>
                </div>
                
                <div className='input-group'>
                    <label htmlFor="reader-photo">Upload photo:</label>
                    <input type="file" name="reader-photo" id="reader-photo"></input>
                </div>

                <div className='input-group'>
                <label htmlFor="reader-date-joined">Date Joined:</label>
                    <input type="date" name="reader-date-joined" id="reader-date-joined"></input>
                </div>

                <button type="submit">SUBMIT</button>
            </div>              
        </form>
    );
}

export default InsertReader;