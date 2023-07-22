import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";



function App() {
  // https://www.truemeds.in/ data website 
  // https://www.1mg.com/
  return (

    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      <Toaster/>
    </div>

  );
}

export default App;
