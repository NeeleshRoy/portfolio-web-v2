import React from 'react';
<<<<<<< HEAD
import "../sass/index.sass";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Work from './Work'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='work' element={<Work />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
=======
import '../sass/index.scss';

const App = () => (
  <div>
    Neelesh Roy - Portfolio V2
  </div>
);

export default App;
>>>>>>> f69ac8f3ed53d236e9916316409fc70bf95f19d1
