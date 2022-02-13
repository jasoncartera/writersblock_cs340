import React from 'react';
import Navigation from "../components/Navigation";
import InsertReader from '../components/readers/InsertReader';
import ReaderList from '../components/readers/ReaderList';
import { useState } from 'react';


function Readers() {
    
    // Set state
    const [readers, setReaders] = useState([]);

    return (
        <>
            <Navigation />
            <div className="Entity-header">
                <h1>Manage Readers</h1>
            </div>
            <div className="Entity-page">
                <div className="list">
                    <ReaderList readers={readers}/>
                </div>
                <div className="insert">
                    <InsertReader setReaders={setReaders}/>
                </div>
            </div>
        </>
    );
}

export default Readers;