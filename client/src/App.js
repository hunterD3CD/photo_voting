import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// ----------------------------------------- COMPONENTS & PAGES -----------------------------------
import ButtonAppBar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}



export default App;


