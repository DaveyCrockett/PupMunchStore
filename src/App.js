import './App.css';
import NavBar from './components/NavBar/navBar';
import Footer from './components/Footer/footer';
import Catalog from './components/Catalog/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";



function App() {
  return (
  
    <div className="App">
      <NavBar />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
