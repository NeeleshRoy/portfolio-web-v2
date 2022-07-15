import React from 'react';
import "../sass/index.sass";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App