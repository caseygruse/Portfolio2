import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Education } from './components/Education';



export default class App extends Component {
  static displayName = App.name;
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path="/Education" component={Education} />
      </Layout>
    );
  }
}
