import React, {Component } from 'react';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './Home.js';
import { About } from './About.js';
import { Contact } from './Contact.js';
import { NoMatch } from './NoMatch.js';
import { Layout } from './components/Layout.js';
import { NavigationBar } from './components/NavigationBar.js';
import { Jumbotron } from './components/Jumbotron.js';

function App() {
  return (
    <React.Fragment>
    <Router>
      <NavigationBar />
      <Jumbotron />
    <Layout>
      {/* <div className="App"> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      {/* </div> */}
    </Layout>
    </Router>
    </React.Fragment>
  );
}

export default App;
