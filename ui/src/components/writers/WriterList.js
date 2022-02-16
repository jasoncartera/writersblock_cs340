import React from 'react';
import Writer from './Writer';


/* 
Citation for the following function:
Date: 2/15/2022
How table is broken up into components is Adapted from: 
    movies_ui.zip (particularly MovieList.js and Movie.js) from CS 290 F'21, Module 9, Exploration — Implementing a Full-Stack MERN App - Part 1
Source URL: https://canvas.oregonstate.edu/courses/1830200/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=21362841
*/
function WriterList({ writers }) {
    return (
        <>
            <p>Current Writers</p>
            <table id="writers" className="list-table">
                <thead>
                    <tr className="list-row">
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Photo</th>
                        <th>Date Joined</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {writers.map((writer, i) => <Writer writer={writer} key={i} />)}
                </tbody>
            </table>
        </>
    );
}

export default WriterList;