import React from 'react';
import InsertReader from '../components/readers/InsertReader';
import ReaderList from '../components/readers/ReaderList';
import { useOutletContext } from "react-router-dom";
import UpdateWriter from '../components/writers/UpdateWriter';


function Readers() {

    const [readers, setReaders] = useOutletContext();

    return (
        <>
            <div className="title">
                <h1>Manage Readers</h1>
            </div>
            <div className="page-body">
                <div className="list">
                    <ReaderList readers={readers}/>
                </div>
                <div className='insert-update'>
                    <div className="insert">
                        <InsertReader setReaders={setReaders}/>
                    </div>
                    <div className="update">
                        <UpdateWriter setReaders={setReaders}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Readers;