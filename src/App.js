import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Accessories from './pages/Accessories/Accessories';
import Clothes from './pages/Clothes/Clothes';
import Gadgets from './pages/Gadgets/Gadgets';
import Laptops from './pages/Laptops/Laptops';
import Watches from './pages/Watches/Watches';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/accessories' element={<Accessories />}></Route>
          <Route exact path='/clothes' element={<Clothes />}></Route>
          <Route exact path='/gadgets' element={<Gadgets />}></Route>
          <Route exact path='/laptops' element={<Laptops />}></Route>
          <Route exact path='/watches' element={<Watches />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
