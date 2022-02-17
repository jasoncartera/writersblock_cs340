import React from 'react';

/* 
Citation for the following return's use of select dropdown in React:
Date: 2/12/2022
Adapted from: Populate Drop Down Options in React
Source URL: https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0
*/

function WritersReadersSearch({ setPosts, writers, readers }) {
    
    return (
        <>
            <form className="search-form" id="search-writer-form">
                <div class='formContents'>
                    <p>Search WritersReaders</p>
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
            <form className="search-form" id="search-reader-form-username">
                <div className='formContents'>
                    <div className='input-group'>
                        <label for="readerid">Search by Reader:</label>
                        <select type="number" name="readerid" id="search-readerid">
                            <option value="" selected>Select a Reader</option>
                            {readers.map((reader, i) => <option value={reader.Id}>{reader.Username}</option>)}
                        </select>
                    </div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form> 

        </>
    );
}

export default WritersReadersSearch;