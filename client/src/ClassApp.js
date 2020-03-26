import React, { Component } from 'react';

export default class App extends Component() {
  constructor(props) {
    super(props); // this is mandatory

    // here is the only place that you set the state

    // setting the initial state

    this.state = {
      quotes: [],
      loading: true
    };
  }

  componentDidMount() {
    // place any request that needs to be executed upfront
  }

  render() {
    return <></>;
  }
}
