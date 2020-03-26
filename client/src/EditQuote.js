import React from 'react';

export default function EditQuote(props) {
  return (
    <>
      <div className="container">
        <h1>Edit Quote</h1>

        <form>
          <div style={{ width: '20em' }}>
            <div className="form-group">
              <input
                style={{ width: '100%' }}
                type="text"
                name="quote"
                id="quote"
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
