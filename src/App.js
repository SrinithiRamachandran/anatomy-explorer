import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import FunFacts from "./pages/FunFacts";
import Quiz from "./pages/Quiz";
import OrganOfTheDay from "./pages/OrganOfTheDay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/funfacts" element={<FunFacts />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/organoftheday" element={<OrganOfTheDay />} />
    </Routes>
  );
}

export default App;
