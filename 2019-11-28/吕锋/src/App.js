import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './container/Login'
import Home from './context/Home'

class App extends React.Component {
  render() {

    return (
      <Router>
        <Route exact path="/" component={Login}  />
        <Route  path="/home" component={Home}  />
      </Router>
    );
  }
}

export default App;
