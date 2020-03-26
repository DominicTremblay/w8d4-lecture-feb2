import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    const state = {
      quotes: []
    };
  }

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/quotes'
    })
      .then(response => {
        this.setState({ quotes: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
