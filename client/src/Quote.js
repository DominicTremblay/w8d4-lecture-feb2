import React from 'react';
import './Quote.css';

export default function Quote({ quote }) {
  return (
    <div className="card">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <div className="quote-title">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target={`#collapse${quote && quote.id}`}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {quote && quote.content}
            </button>

            <div className="quote-btn">
              <form className="edit-quote-btn">
                <input type="submit" value="Edit" />
              </form>
              <form className="delete-quote-btn">
                <input type="submit" value="Delete" />
              </form>
            </div>
          </div>
        </h2>
      </div>

      <div
        id={`collapse${quote && quote.id}`}
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">comment</div>
      </div>
    </div>
  );
}
