import React from "react";
import Navigation from "../components/Navigation";
import InsertWriter from "../components/writers/InsertWriter";
import WriterList from "../components/writers/WriterList";
import { useState } from "react";

function Writers() {

    // Set state
    const [writers, setWriters] = useState([]);

    return (
    <>
        <Navigation />
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
