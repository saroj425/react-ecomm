import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    // <div>
    //   <Navbar/>    
    //   <Router>      
    //   <Routes>
    //     <Route  path="/" element = {<Home/>}/>
    //     <Route  path='/products' element = {<Products/> }/>
    //   </Routes> 
    //   </Router>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
 