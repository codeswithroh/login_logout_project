import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Space from './components/Space';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={Space} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={App} />
      </Switch>
    </Router>
  ,
  document.getElementById('root')
);

