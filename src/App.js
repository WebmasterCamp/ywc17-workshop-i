import React from "react";
import Home from './components/Home';
import Login from './components/Login';
import Todos from './components/Todos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.scss'
export default function App() {
  return (
    <Router>
      <div>
        <h1 className="title">React-Router-Redux-Firebase-Axios-Sass-Docker-Travis</h1>
            <Link to="/">Home</Link>{'\u00A0'}
            <Link to="/login">Login</Link>{'\u00A0'}
            <Link to="/todos">Todos</Link>{'\u00A0'}

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }