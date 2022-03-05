import React from 'react';
import Reader from './Reader';
import { useOutletContext } from "react-router-dom";


/* 
Citation for the following function:
Date: 2/15/2022
How table is broken up into components is Adapted from: 
    movies_ui.zip (particularly MovieList.js and Movie.js) from CS 290 F'21, Module 9, Exploration — Implementing a Full-Stack MERN App - Part 1
Source URL: https://canvas.oregonstate.edu/courses/1830200/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=21362841
*/
function ReaderList({ readers, setReaderToEdit }) {

    const context = useOutletContext();
    let setReaders = context.read[1]

    const onDelete = async id => {
        
        const response = await fetch(`https://writers-block-serve.herokuapp.com/readers/${id}`, {method: 'DELETE'});

        if (response.status === 204) {
            // re-render table
            const response = await fetch('https://writers-block-serve.herokuapp.com/readers');
            const readers = await response.json();
            setReaders(readers);
        } else {
            console.error(`Failed to delete the reader with id ${id}, status code ${response.status}`);
        }
    }

    const onEdit = reader => {
        setReaderToEdit(reader);
    }

    readers.sort((a, b) => (a.Id > b.Id ? 1: -1));
    return (
        <>
            <p>Current Readers</p>
            <table id="readers" className="list-table">
                <thead>
                    <tr className="list-row">
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Photo</th>
                        <th>Date Joined</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {readers.map((reader, i) => <Reader reader={reader} 
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
                </tbody>
            </table>
        </>
    );
}

export default ReaderList;