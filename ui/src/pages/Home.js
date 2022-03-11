import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navigation from "../components/Navigation";

function Home(){

    // Set states
    const [writers, setWriters] = useState([]);
    const [readers, setReaders] = useState([]);
    const [posts, setPosts] = useState([]);

    const getWriters = async () => {
        const response = await fetch(' https://writers-block-serve.herokuapp.com/writers');
        const writers = await response.json();
        setWriters(writers);
    }

    const getReaders = async () => {
        const response = await fetch(' https://writers-block-serve.herokuapp.com/readers');
        const readers = await response.json();
        setReaders(readers);
    }

    const getPosts = async () => {
        const response = await fetch(' https://writers-block-serve.herokuapp.com/posts');
        const posts = await response.json();
        setPosts(posts);
    }
        
    useEffect(() => {
        getWriters();
        getReaders();
        getPosts();
    }, []);

    return (
        <>   
            <Navigation />   

            <div className="title">
                <h1>WritersBlock Management Site</h1>
            </div>
            

            <Outlet context={{write: [writers, setWriters], read: [readers, setReaders], post: [posts, setPosts]}} />
        </>
    );
}

export default Home;
