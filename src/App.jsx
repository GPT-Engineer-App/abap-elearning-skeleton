import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NavBar from "./components/NavBar.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/dashboard" element={<Index page="dashboard" />} />
      <Route path="/lessons" element={<Index page="lessons" />} />
      <Route path="/tests" element={<Index page="tests" />} />
      <Route path="/chatbot" element={<Index page="chatbot" />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

export default App;
