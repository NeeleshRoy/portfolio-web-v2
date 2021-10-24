import React from 'react';
import "../sass/index.sass";
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <main className="container">
        <Navbar />
        <Home />
      </main>
    </Router>
  );
};

export default App;