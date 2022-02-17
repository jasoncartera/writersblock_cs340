import React from "react";
import InsertWriter from "../components/writers/InsertWriter";
import WriterList from "../components/writers/WriterList";
import { useOutletContext } from "react-router-dom";
import UpdateWriter from "../components/writers/UpdateWriter";
import WriterSearch from "../components/writers/WriterSearch";

function Writers() {

    const [writers, setWriters] = useOutletContext();

    return (
    <>
        <div className="title">
            <h1>Manage Writers</h1>
        </div>
        <div className="page-body">
            <div className="list">
                <WriterList writers={writers} />
            </div>
            <div className='dbms-components'>
                <div className="search">
                    <WriterSearch setWriters={setWriters} writers={writers}/>
                </div>
                <div className="insert">
                    <InsertWriter setWriters={setWriters} />
                </div>
                <div className="update">
                    <UpdateWriter setWriters={setWriters}/>
                </div>
            </div>
        </div>
    </>
    );
}

export default Writers;
