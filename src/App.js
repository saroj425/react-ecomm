import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products'
import {Route} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
        <Navbar/>
        <Home/>
      </>
    </div>
  );
}

export default App;
