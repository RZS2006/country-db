// --- CountryDB - App.js ---

// Imports
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import Details from "./components/Details/Details";

// Component
const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route path="/" exact render={() => <Home />}/>
                    <Route path="/favorites" render={() => <Favorites />}/>
                    <Route path="/countries/:code" render={() => <Details />}/>
                </Switch>
            </div>
        </Router>
    ) 
}

export default App
