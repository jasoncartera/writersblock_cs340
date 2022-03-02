import React from 'react';
import InsertWriterReader from '../components/writersReaders/InsertWriterReader';
import WriterReaderList from '../components/writersReaders/WriterReaderList';
import { useState, useEffect } from 'react';
import UpdateWriterReader from '../components/writersReaders/UpdateWriterReader';
import { useOutletContext } from "react-router-dom";
import WritersReadersSearch from '../components/writersReaders/WritersReadersSearch';


function WritersReaders() {

    const [writersReaders, setWritersReaders] = useState([]);

    const getWritersReaders = async () => {
        const response = await fetch(' https://writers-block-serve.herokuapp.com/writersreaders');
        const wrs = await response.json();
        setWritersReaders(wrs);
    }
        
    useEffect(() => {
        getWritersReaders();
    }, []);

    const context = useOutletContext();
    const readers = context.read[0];
    const writers = context.write[0];

    return (
        <>
            <div className="title">
                <h1>Manage WritersReaders</h1>
            </div>
            <div className="page-body">
                <div className="list">
                    <WriterReaderList writersReaders={writersReaders} setWritersReaders={setWritersReaders} />
                </div>
                <div className='dbms-components'>
                    <div className="insert">
                        <WritersReadersSearch setWritersReaders={setWritersReaders} writers={writers} readers={readers}/>
                    </div>
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