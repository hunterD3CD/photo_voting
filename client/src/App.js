import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// ----------------------------------------- COMPONENTS & PAGES -----------------------------------
import ButtonAppBar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import PhotoVote from "./pages/PhotoVote"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/photo" component={PhotoVote} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}



export default App;


