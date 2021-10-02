import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// ----------------------------------------- COMPONENTS & PAGES -----------------------------------
import ButtonAppBar from "./components/Navbar.js"
import Home from "./pages/Home.js"

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
      </div>
    </Router>
  );
}



export default App;


