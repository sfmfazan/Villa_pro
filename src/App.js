import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Our Restaurant</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <footer>
          <p>&copy; 2023 Our Restaurant. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
