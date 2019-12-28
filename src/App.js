import React from "react";
import Home from './pages/Home';
import Term from './pages/Term';
import Customization from './pages/Customization';
import RegisterForm from './pages/RegisterForm';
import TradeList from './pages/TradeList'
import TradeDetail from './pages/TradeDetail'
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
        <Switch>
          
        <Route path="/term">
            <Term />
          </Route>
          <Route path="/tradelist">
            <TradeList />
          </Route>
          <Route path="/tradedetail">
            <TradeDetail />
          </Route>
          <Route path="/customization">
            <Customization />
          </Route>
          <Route path="/register">
            <RegisterForm/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}