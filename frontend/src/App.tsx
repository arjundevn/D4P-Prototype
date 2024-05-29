
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout></Layout>} />
        <Route path="/search" element={<>Search page</>} />
        <Route path="/" element={<Layout></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
