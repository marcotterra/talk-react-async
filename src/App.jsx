import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Another from "./pages/Another";

import "./styles.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/" render={() => <Home />} />
      </Router>
    </div>
  );
}

export default App;
