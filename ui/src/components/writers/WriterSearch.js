import React from 'react';

/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function WriterSearch({ setPosts, writers }) {
    
    return (
        <form className="search-form" id="search-writer-form">
            <div class='formContents'>
                <p>Search Writers</p>
                    <div className='input-group'>
                        <label for="writerid">Search by Writer:</label>
                        <select type="number" name="writerid" id="search-writerid">
                            <option value="" selected>Select a Writer</option>
                            {writers.map((writer, i) => <option value={writer.Id}>{writer.Username}</option>)}
                        </select>
                    </div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
    );
}

export default WriterSearch;