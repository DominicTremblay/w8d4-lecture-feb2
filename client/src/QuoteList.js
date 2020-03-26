import React from 'react';

export default function QuoteList({ quotes }) {
  const quoteList = quotes.map(quote => <li>{quote.content}</li>);

  return (
    <>
      <main className="container">
        <h1>List of Famous Movie Quotes</h1>

        {quoteList}
      </main>
    </>
  );
}
