import React from 'react';

export default function AddQuote(props) {
  return (
    <>
      <div className="container">
        <h1>Add a New Quote</h1>

        <form>
          <div style={{ width: '20em' }}>
            <div className="form-group">
              <input
                style={{ width: '100%' }}
                type="text"
                name="quote"
                id="quote"
                placeholder="Please enter your quote"
                value=""
              />
            </div>

            <input type="submit" className="btn btn-primary" value="Add" />
          </div>
        </form>
      </div>
    </>
  );
}
