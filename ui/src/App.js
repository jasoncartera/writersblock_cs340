import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Welcome to WritersBlock Management Page</h1>
        <Link to="/Writers">Manage Writers</Link>
        <Link to="/Readers">Manage Readers</Link>
        <Link to="/WritersReaders">Manage WritersReaders</Link>
        <Link to="/Posts">Manage Posts</Link>
        {/* <Link to="/Comments">Manage Comments</Link> */}
      </div>
    </div>
  );
}

export default App;
