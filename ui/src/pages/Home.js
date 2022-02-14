import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

function Home(){

    // Set states
    const [writers, setWriters] = useState([]);
    const [readers, setReaders] = useState([]);

    return (
        <>
            <Link to=".">Home</Link>
            <Link to="Writers">Manage Writers</Link>
            <Link to="Readers">Manage Readers</Link>
            <Link to="WritersReaders">Manage WritersReaders</Link>
            <Link to="Posts">Manage Posts</Link>
            <Link to="Comments">Manage Comments</Link>

            <div className="Entity-header">
                <h1>WritersBlock Management Site</h1>
            </div>
            <Outlet context={[writers, setWriters, readers, setReaders]} />
        </>
    );
}

export default Home;