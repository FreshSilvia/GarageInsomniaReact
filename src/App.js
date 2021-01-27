import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/main.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Contactus from './pages/Contactus';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home} />
          <Route path='/products' exact component= {Products} />
          <Route path='/contactus' exact component= {Contactus} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
