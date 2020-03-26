import React from 'react';
import Quote from './Quote';

export default function QuoteList({ quotes }) {
  const quoteList = quotes.map(quote => <Quote quote={quote} />);

  return (
    <>
      <main className="container">
        <h1>List of Famous Movie Quotes</h1>

        <div className="accordion" id="accordionExample">
          {quoteList}
        </div>
      </main>
    </>
  );
}
