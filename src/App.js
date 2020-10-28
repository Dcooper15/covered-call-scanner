import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainSearch from './components/MainSearch';
import MainTech from "./components/Tech/MainTech";
import MainFinance from "./components/Finance/MainFinance";
import MainEntertainment from "./components/Entertainment/MainEntertainment";
import MainTravel from "./components/Travel/MainTravel";
import AppInfo from "./components/AppInfo";
import Navbar from "./components/Navbar/Navbar";
import './App.css';



class App extends Component {
 

  render() {

    return (
      <>
       
      <Router>
        <Route exact path="/">
        <Navbar />
        <br></br>
        <div>
          <br></br><br></br><br></br><br></br>
         <MainSearch />
        </div>
        <div className="AppInfo">
          <AppInfo />
        </div>
          <h2>Sectors</h2>
          <h3><Link to="/finance">View Finance Stocks</Link></h3>
          <h3><Link to="/entertainment">View Entertainment Stocks</Link></h3>
          <h3><Link to="/tech">View Tech Stocks</Link></h3>
          <h3><Link to="/travel">View Travel Stocks</Link></h3>
          
        </Route>
        
        
        <div className="Routes">
          <Route path="/tech">
            <MainTech />
          </Route>
        
        
          <Route path="/finance">
            <MainFinance />
          </Route>
        
       
          <Route path="/travel">
            <MainTravel />
          </Route>
        
        
          <Route path="/entertainment">
            <MainEntertainment />
          </Route>
        </div>
        </Router>
       
      </>
    );
  }
}

export default App;
