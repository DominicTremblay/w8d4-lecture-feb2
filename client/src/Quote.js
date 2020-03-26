import React from 'react';
import { Link } from 'react-router-dom';
import './Quote.css';

export default function Quote({ quote, deleteQuote }) {
  const handleDelete = event => {
    event.preventDefault();
    deleteQuote(quote.id);
  };

  const handleEdit = event => {
    event.preventDefault();
  };

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
              <Link to={`/quotes/${quote.id}`} className="edit-btn">
                Edit
              </Link>
              <form onSubmit={handleDelete} className="delete-quote-btn">
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
