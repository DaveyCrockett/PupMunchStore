import './App.css';
import NavBar from './components/NavBar/navBar';
import Footer from './components/Footer/footer';
import Catalog from './components/Catalog/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "font-awesome/css/font-awesome.min.css";
import Home from './components/PageLinks/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/PageLinks/about';
import GlobalContext from './context/globalContext';
import Cart from './components/PageLinks/cart';



function App() {
  return (
  
    <div className="App">
      <GlobalContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/aboutme" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </GlobalContext>
    </div>
  );
}

export default App;
