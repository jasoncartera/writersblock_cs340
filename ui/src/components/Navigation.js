import { Link } from "react-router-dom";

function Navigation(){
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Writers">Manage Writers</Link>
                <Link to="/Readers">Manage Readers</Link>
                <Link to="/WritersReaders">Manage WritersReaders</Link>
                <Link to="/Posts">Manage Posts</Link>
                <Link to="/Comments">Manage Comments</Link>
            </nav>
        </>
    );
}

export default Navigation;