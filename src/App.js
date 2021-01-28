
import './App.css';

import Home from './component/Home'

import About from './component/About'
import Destinations from './components/Destinations'
import Partner from './component/Partner'
import Header from './component/Header'
import Footer from './component/Footer'


import Error from './component/Error'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";




function App() {
  return (
    
    <Router>
     
      <Header />
    
     

      <Switch>
       

        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/destinations" component={Destinations} exact />
        <Route path="/partner" component={Partner} exact />

       
        

        <Route path="*" component={Error} />
          

      </Switch>
    <Footer />
    </Router>
  );
}

export default App;
