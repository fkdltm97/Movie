import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage'
import NavBar from './components/views/NavBar/NavBar'
import RegisterPage from './components/views/RegisterPage/RegisterPage'
import Footer from './components/views/Footer/Footer'
import Auth from './hoc/auth'
import MovieDetail from "./components/views/MovieDetail/MovieDetail";

function App() {
  return (
    <Router>
    <div>

      <Switch>
        <Route exact path="/" component={Auth(LandingPage,null)}/>
        
        <Route exact path="/login"  component={Auth(LoginPage,false)}/>
        
        <Route exact path="/register" component={Auth(RegisterPage,false)}/>
      
        <Route exact path="/movie/:movieId" component={Auth(MovieDetail,null)}/>
        
      </Switch>
    </div>
  </Router>
  );
}



export default App;
