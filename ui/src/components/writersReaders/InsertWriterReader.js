import React from 'react';

function InsertWriterReader({ setWritersReaders }) {

    
    return (
        <form className="Entity-page-form" id="add-writer-reader-form">
            
            <fieldset>
                <legend>Insert New Writer</legend>
            
                <label for="readerid">ReaderId:</label>
                <input type="number" name="readerid" id="readerid"></input>

                <label for="writerid">WriterId:</label>
                <input type="number" name="writerid" id="writerid"></input>

                <input type="submit"></input>
                    
            </fieldset>
        </form>
    );
}

export default InsertWriterReader;