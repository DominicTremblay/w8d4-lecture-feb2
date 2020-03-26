import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import AddQuote from './AddQuote';
import EditQuote from './EditQuote';
import QuoteList from './QuoteList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      redirect: false
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

  deleteQuote = id => {
    axios({
      method: 'DELETE',
      url: `/api/quotes/${id}`
    })
      .then(response => {
        this.setState({
          quotes: this.state.quotes.filter(quote => quote.id !== id)
        });
      })
      .catch(err => console.log(err));
  };

  updateQuote = (id, content) => {
    this.setState({ redirect: false });
    axios({
      method: 'PUT',
      url: `/api/quotes/${id}`,
      data: { quote: content }
    })
      .then(({ data: newQuote }) => {
        const updatedQuotes = this.state.quotes.map(quote => {
          if (quote.id === id) {
            quote.content = content;
          }
          return quote;
        });

        this.setState({ quotes: updatedQuotes, redirect: true });
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
        {this.state.redirect && <Redirect to="/quotes" />}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <Link to="/quotes/" className="nav-link">
                  List of Quotes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/quotes/new" className="nav-link">
                  Add New Quote
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route
            exact
            path="/quotes"
            render={props => (
              <QuoteList
                {...props}
                quotes={this.state.quotes}
                deleteQuote={this.deleteQuote}
              />
            )}
          />
          <Route
            path="/quotes/new"
            render={props => <AddQuote addNewQuote={this.addNewQuote} />}
          />
          <Route
            path="/quotes/:id"
            render={props => (
              <EditQuote
                {...props}
                quotes={this.state.quotes}
                updateQuote={this.updateQuote}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default App;
