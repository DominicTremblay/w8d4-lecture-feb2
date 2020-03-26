import React from 'react';
import { Link } from 'react-router-dom';

export default function Quote(props) {
  return (
    <div className="card">
      <div className="card-header" id="headingOne">
        <h2 className="mb-0">
          <div className="quote-title">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target={`#collapse1`}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Content goes here
            </button>

            <div className="quote-btn">
              <Link to="#" className="edit-btn">
                Edit
              </Link>
              <form className="delete-quote-btn">
                <input type="submit" value="Delete" />
              </form>
            </div>
          </div>
        </h2>
      </div>

      <div
        id={`collapse1`}
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">comment</div>
      </div>
    </div>
  );
}
