import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Components/Navbar/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
      
        <Header />
        <div className="layout-page-container">
          <Home />
        </div>
        <Footer />      
    </div>
  );
}

export default App;
