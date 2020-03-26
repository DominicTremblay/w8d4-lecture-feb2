import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import AddQuote from './AddQuote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  addNewQuote = content => {
    axios({
      method: 'POST',
      url: '/api/quotes',
      data: { quote: content }
    })
      .then(response => {
        this.setState({ quotes: [...this.state.quotes, response.data] });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    axios({
      method: 'GET',
      url: '/api/quotes'
    })
      .then(response => {
        this.setState({ quotes: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <Link to="/quotes/new" className="nav-link">
                  Add New Quote
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route
            path="/quotes/new"
            render={props => <AddQuote addNewQuote={this.addNewQuote} />}
          />
        </Switch>
      </>
    );
  }
}

export default App;
