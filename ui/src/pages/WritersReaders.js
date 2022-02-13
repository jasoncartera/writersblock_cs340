import React from 'react';
import Navigation from "../components/Navigation";
import InsertWriterReader from '../components/writersReaders/InsertWriterReader';
import WriterReaderList from '../components/writersReaders/WriterReaderList';
import { useState } from 'react';


function WritersReaders() {

    // Set state
    const [writersReaders, setWritersReaders] = useState([]);

    return (
        <>
            <Navigation />
            <div className="Entity-header">
                <h1>Manage WritersReaders</h1>
            </div>
            <div className="Entity-page">
                <div className="list">
                    <WriterReaderList writersReaders={writersReaders}/>
                </div>
                <div className="insert">
                    <InsertWriterReader setWritersReaders={setWritersReaders}/>
                </div>
            </div>
        </>
    );
}

export default WritersReaders;