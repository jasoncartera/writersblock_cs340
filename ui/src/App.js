import './App.css';
import Home from "./pages/Home";
import Writers from "./pages/Writers";
import Readers from "./pages/Readers";
import WritersReaders from "./pages/WritersReaders";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";
import { Routes, Route } from "react-router-dom";


function App() {

    return (
    <div className="App">
        <div className="App-header">
            <Routes>
                <Route path="/*" element={<Home />}>
                    <Route path="writers" element={<Writers />} />
                    <Route path="readers" element={<Readers />} />
                    <Route path="writersreaders" element={<WritersReaders />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="comments" element={<Comments />} />
                </Route>
            </Routes>
        </div>
    </div>
    );
}

export default App;