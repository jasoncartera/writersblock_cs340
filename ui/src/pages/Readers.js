import React from 'react';
import InsertReader from '../components/readers/InsertReader';
import ReaderList from '../components/readers/ReaderList';
import { useOutletContext } from "react-router-dom";


function Readers() {

    const [readers, setReaders] = useOutletContext();

    return (
        <>
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