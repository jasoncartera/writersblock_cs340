import React from 'react';
import InsertReader from '../components/readers/InsertReader';
import ReaderList from '../components/readers/ReaderList';
import { useOutletContext } from "react-router-dom";
import UpdateReader from '../components/readers/UpdateReader';
import ReaderSearch from '../components/readers/ReaderSearch';


function Readers() {

    const context = useOutletContext();
    const [readers, setReaders] = context.read;

    return (
        <>
            <div className="title">
                <h1>Manage Readers</h1>
            </div>
            <div className="page-body">
                <div className="list">
                    <ReaderList readers={readers} />
                </div>
                <div className='dbms-components'>
                    <div className="search">
                        <ReaderSearch setReaders={setReaders} readers={readers}/>
                    </div>
                    <div className="insert">
                        <InsertReader setReaders={setReaders}/>
                    </div>
                    <div className="update">
                        <UpdateReader setReaders={setReaders}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Readers;