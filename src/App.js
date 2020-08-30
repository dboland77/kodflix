import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Gallery} />
        <Route exact path="/details" component={Details} />
      </div>
    </Router>
  );
}

export default App;
