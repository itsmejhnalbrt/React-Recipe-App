
import React from 'react';
import Home from "./Home";
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import NotFound from './NotFound';
import { Route, Routes } from 'react-router-dom';

function Pages() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        <Route path='/searched/:search' element={<Searched />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Pages;