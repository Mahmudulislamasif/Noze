import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Shared/Footer';
import { Routes, Route, Link } from "react-router-dom";
import Specs from './Pages/Specs/Specs';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="Specs" element={<Specs />} />
        </Routes>

        <Footer></Footer>
    </div>
  );
}

export default App;
