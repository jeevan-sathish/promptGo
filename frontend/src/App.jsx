import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Playground from "./pages/Playground";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
