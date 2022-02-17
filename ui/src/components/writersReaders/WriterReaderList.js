import React from 'react';
import WriterReader from './WriterReader';


/* 
Citation for the following function:
Date: 2/15/2022
How table is broken up into components is Adapted from: 
    movies_ui.zip (particularly MovieList.js and Movie.js) from CS 290 F'21, Module 9, Exploration — Implementing a Full-Stack MERN App - Part 1
Source URL: https://canvas.oregonstate.edu/courses/1830200/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=21362841
*/
function WriterReaderList({ writersReaders }) {
    return (
        <>
            <p>Current WritersReaders</p>
            <table id="writersReaders" className="list-table">
                <thead>
                    <tr className="list-row">
                        <th>Id</th>
                        <th>Writer Username</th>
                        <th>Reader Username</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {writersReaders.map((writerReader, i) => <WriterReader writerReader={writerReader} key={i} />)}
                </tbody>
            </table>
        </>
    );
}

export default WriterReaderList;