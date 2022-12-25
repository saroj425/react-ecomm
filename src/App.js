import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from "react-router-dom"

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
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/products" element={<Products />} />
    //     <Route path="/products/:id" element={<Product />} />
    //   </Routes>
    // </Router>
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 