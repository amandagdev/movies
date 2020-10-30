import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Fav from './Pages/Favorites';
import Details from './Pages/Details';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default Router;
