import React from 'react';
import Writer from './Writer';
import { useOutletContext} from "react-router-dom";
import UpdateWriter from "./UpdateWriter";


/* 
Citation for the following function:
Date: 2/15/2022
How table is broken up into components is Adapted from: 
    movies_ui.zip (particularly MovieList.js and Movie.js) from CS 290 F'21, Module 9, Exploration — Implementing a Full-Stack MERN App - Part 1
Source URL: https://canvas.oregonstate.edu/courses/1830200/pages/exploration-implementing-a-full-stack-mern-app-part-1?module_item_id=21362841
*/

function WriterList({ writers, setWriterToEdit }) {

    const context = useOutletContext();
    let setWriters = context.write[1]

    const onDelete = async id => {
        
        const response = await fetch(`https://writers-block-serve.herokuapp.com/writers/${id}`, {method: 'DELETE'});

        if (response.status === 204) {
            // re-render table
            const response = await fetch('https://writers-block-serve.herokuapp.com/writers');
            const writers = await response.json();
            setWriters(writers);
        } else {
            console.error(`Failed to delete the writer with id ${id}, status code ${response.status}`);
        }
    }

    const onEdit = writer => {
        setWriterToEdit(writer);
    }

    writers.sort((a, b) => (a.Id > b.Id ? 1: -1));
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
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {writers.map((writer, i) => <Writer writer={writer}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
                </tbody>
            </table>
        </>
    );
}

export default WriterList;