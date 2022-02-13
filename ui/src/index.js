import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Writers from "./pages/Writers";
import Readers from "./pages/Readers";
import WritersReaders from "./pages/WritersReaders";
import Posts from "./pages/Posts";
import Comments from "./pages/Comments";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/writers" element={<Writers />} />
      <Route path="/readers" element={<Readers />} />
      <Route path="/writersreaders" element={<WritersReaders />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/comments" element={<Comments />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
