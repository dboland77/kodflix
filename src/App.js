import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "./components/Gallery";
import Details from "./components/Details";
import NotFound from "./components/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/not-found" component={NotFound} />
          <Route exact path="/:movieId" component={Details} />
          {/* The : after the slash is like a wildcard operator and will
        navigate to the component regardless */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
