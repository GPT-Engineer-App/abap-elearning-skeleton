import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Index />} />
      <Route path="/lessons" element={<Index page="lessons" />} />
      <Route path="/tests" element={<Index page="tests" />} />
      <Route path="/chatbot" element={<Index page="chatbot" />} />
    </Routes>
  </Router>
);

export default App;
