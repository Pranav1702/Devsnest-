import './App.css';
import { Link,BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import About from "./About";
import {Yash} from "./Yash"
function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav className="navbar">
      <span className="t1"><Link to="/Home">Home</Link></span>
      <span className="t1"><Link to="/Dashboard">Dashboard</Link></span>
       <span className="t1"><Link to="/Profile">Profile</Link></span>
        <span className="t1"><Link to="/About">About</Link></span> 
      </nav>
      </div>
        <Switch>
          <Yash>
          <Route exact path="/Home" >
            <Home />
          </Route>
          <Route exact path="/Dashboard" >
            <Dashboard />
          </Route>
          <Route exact path="/Profile" >
            <Profile />
          </Route>
          <Route exact path="/About" >
            <About />
          </Route>
          </Yash>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
