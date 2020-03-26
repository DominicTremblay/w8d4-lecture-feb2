import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class AddQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      redirect: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addNewQuote(this.state.text);
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>Add a New Quote</h1>

          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '20em' }}>
              <div className="form-group">
                <input
                  style={{ width: '100%' }}
                  type="text"
                  name="quote"
                  id="quote"
                  placeholder="Please enter your quote"
                  value={this.state.text}
                  onChange={event =>
                    this.setState({ text: event.target.value })
                  }
                />
              </div>

              <input type="submit" className="btn btn-primary" value="Add" />
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddQuote;
