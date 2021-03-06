import React from "react";
import Home from './pages/Home';
import HomeLoggedIn from './pages/HomeLoggedIn';
import Term from './pages/Term';
import Customization from './pages/Customization';
import RegisterForm from './pages/RegisterForm';
import TradeList from './pages/TradeList'
import TradeDetail from './pages/TradeDetail'
import SelectToTrade from './pages/SelectToTrade'
import SelectToTradeNoti from './pages/SelectToTradeNoti'
import Notification from './pages/Notification'
import Content1 from './pages/Content1'
import Content2 from './pages/Content2'
import Content3 from './pages/Content3'
import Content4 from './pages/Content4'
import Point from './pages/Point'
import Notification2 from './pages/Notification2'

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
          <Route path="/noti">
            <Notification />
          </Route>
          <Route path="/tradedetail">
            <TradeDetail />
          </Route>
          <Route path="/customization">
            <Customization />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/selecttotrade">
            <SelectToTrade />
          </Route>

          <Route path="/selecttotradenoti">
            <SelectToTradeNoti />
          </Route>

          <Route path="/content1">
            <Content1 />
          </Route>
          <Route path="/content2">
            <Content2 />
          </Route>
          <Route path="/content3">
            <Content3 />
          </Route>
          <Route path="/content4">
            <Content4 />
          </Route>

          <Route path="/point">
            <Point />
          </Route>
          <Route path="/loggedin">
            <HomeLoggedIn />
          </Route>
          <Route path="/noti2">
            <Notification2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}