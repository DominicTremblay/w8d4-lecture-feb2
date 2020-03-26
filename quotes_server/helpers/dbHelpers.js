module.exports = db => {
  const getQuotes = () => {
    const query = {
      text: 'SELECT * FROM quotes'
    };

    return db.query(query).then(result => result.rows);
  };

  const addQuote = content => {
    const query = {
      text:
        'INSERT INTO quotes (content, created_date) VALUES ($1, $2) RETURNING *',
      values: [content, new Date()]
    };

    return db.query(query).then(result => result.rows[0]);
  };

  const deleteQuote = id => {
    const query = {
      text: 'DELETE FROM quotes WHERE id=$1',
      values: [id]
    };

    return db.query(query).then(result => result.rows);
  };

  return {
    getQuotes,
    addQuote,
    deleteQuote
  };
};
