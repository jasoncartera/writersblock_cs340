import { Outlet } from "react-router-dom";
import { useState } from 'react';
import Navigation from "../components/Navigation";

function Home(){

    // Set states
    const [writers, setWriters] = useState([]);
    const [readers, setReaders] = useState([]);
    const [posts, setPosts] = useState([]);

    return (
        <>   
            <Navigation />   

            <div className="title">
                <h1>WritersBlock Management Site</h1>
            </div>

            <Outlet context={[writers, setWriters, readers, setReaders, posts, setPosts]} />
        </>
    );
}

export default Home;
