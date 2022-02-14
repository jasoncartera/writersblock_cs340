import React from "react";
import InsertWriter from "../components/writers/InsertWriter";
import WriterList from "../components/writers/WriterList";
import { useOutletContext } from "react-router-dom";

function Writers() {

    const [writers, setWriters] = useOutletContext();

    return (
    <>
        <div className="Entity-header">
            <h1>Manage Writers</h1>
        </div>
        <div className="Entity-page">
        <div className="list">
            <WriterList writers={writers} />
        </div>
        <div className="insert">
            <InsertWriter setWriters={setWriters} />
        </div>
        </div>
    </>
    );
    }

export default Writers;
