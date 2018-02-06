import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import LeftNav from './components/LeftNav/LeftNav';
import logo from './logo.svg';
import './App.css';
import { ProjectPage } from './containers/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container-fluid">
          <div className="row">
            <LeftNav/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <Switch>
                <Route exact path="/projects" component={ProjectPage}/>
              </Switch>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
