import React from 'react';
import InsertWriterReader from '../components/writersReaders/InsertWriterReader';
import WriterReaderList from '../components/writersReaders/WriterReaderList';
import { useState } from 'react';
import UpdateWriterReader from '../components/writersReaders/UpdateWriterReader';
import { useOutletContext } from "react-router-dom";


function WritersReaders() {

    // Set state
    const [writersReaders, setWritersReaders] = useState([]);
    const [readers, writers] = useOutletContext();

    return (
        <>
            <div className="title">
                <h1>Manage WritersReaders</h1>
            </div>
            <div className="page-body">
                <div className="list">
                    <WriterReaderList writersReaders={writersReaders}/>
                </div>
                <div className='insert-update'>
                    <div className="insert">
                        <InsertWriterReader setWritersReaders={setWritersReaders} writers={writers} readers={readers}/>
                    </div>
                    <div className="update">
                        <UpdateWriterReader setWritersReaders={setWritersReaders} writers={writers} readers={readers}/>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default WritersReaders;