import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/sign/Login';
import Cadastro from './pages/sign/Cadastro';
import Home from './pages/home/Home';
import AllProducts from './pages/allProducts/allProducts';
import Search from './pages/search/Search';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allProducts" element={<AllProducts />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;