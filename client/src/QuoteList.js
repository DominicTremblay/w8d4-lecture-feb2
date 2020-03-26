import React from 'react';
import Quote from './Quote';

export default function QuoteList({ quotes, deleteQuote }) {
  const quoteList = quotes.map(quote => (
    <Quote quote={quote} deleteQuote={deleteQuote} />
  ));

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
