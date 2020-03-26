import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class EditQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      id: Number(this.props.match.params.id),
      redirect: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateQuote(this.state.id, this.state.text);
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.text) {
      const quote = props.quotes.find(
        quote => quote.id === Number(props.match.params.id)
      );

      const content = (quote && quote.content) || '';

      return {
        text: content
      };
    } else {
      return state;
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <h1>Edit Quote</h1>

          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '20em' }}>
              <div className="form-group">
                <input
                  style={{ width: '100%' }}
                  type="text"
                  name="quote"
                  id="quote"
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

export default EditQuote;
