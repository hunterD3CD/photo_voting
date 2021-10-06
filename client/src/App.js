import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
// ----------------------------------------- COMPONENTS & PAGES -----------------------------------
import ButtonAppBar from "./components/Navbar.js"
import Home from "./pages/Home.js"
import PhotoVote from "./pages/PhotoVote"
import Footer from "./components/Footer"

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}



export default App;


