import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import NavBar from "./components/NavBar.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import Lesson1 from "./pages/Lesson1.jsx";
import Lesson2 from "./pages/Lesson2.jsx";
import Lesson3 from "./pages/Lesson3.jsx";
import Test1 from "./pages/Test1.jsx";
import Test2 from "./pages/Test2.jsx";
import Test3 from "./pages/Test3.jsx";

const App = () => (
  <Router>
    <NavBar />
    <Box as="main" mt="32" overflowY="auto" height="calc(100vh - 60px)">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Index page="dashboard" />} />
        <Route path="/lessons" element={<Index page="lessons" />} />
        <Route path="/tests" element={<Index page="tests" />} />
        <Route path="/chatbot" element={<Index page="chatbot" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        <Route path="/lesson3" element={<Lesson3 />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} />
      </Routes>
    </Box>
  </Router>
);

export default App;
