import React from "react";
import Home from './pages/Home';
// import Login from './pages/Login';
// import Todos from './pages/Todos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from "react-router-dom";
import './App.scss'
export default function App() {
  return (
    <Router>
      <div>
        {/* <h1 className="title">React-Router-Redux-Firebase-Axios-Sass-Docker-Travis</h1> */}
            {/* <Link to="/">Home</Link>{'\u00A0'} */}
            {/* <Link to="/login">Login</Link>{'\u00A0'}
            <Link to="/todos">Todos</Link>{'\u00A0'} */}

        <Switch>
          {/* <Route path="/login">
            <Login />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}