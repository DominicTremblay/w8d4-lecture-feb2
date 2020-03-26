import React from 'react';
import { Link } from 'react-router-dom';
import './Quote.css';

export default function Quote({ id, content, deleteQuote }) {
  const handleSubmit = event => {
    event.preventDefault();

    deleteQuote(id);
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
              data-target={`#collapse${id}`}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {content}
            </button>

            <div className="quote-btn">
              <Link to={`/quotes/${id}`} className="edit-btn">
                Edit
              </Link>
              <form onSubmit={handleSubmit} className="delete-quote-btn">
                <input type="submit" value="Delete" />
              </form>
            </div>
          </div>
        </h2>
      </div>

      <div
        id={`collapse${id}`}
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">comment</div>
      </div>
    </div>
  );
}
