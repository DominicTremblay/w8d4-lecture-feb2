DROP TABLE IF EXISTS comments CASCADE;
CREATE TABLE comments
(
  id SERIAL PRIMARY KEY NOT NULL,
  content VARCHAR(225),
  quote_id INTEGER REFERENCES quotes(id) ON DELETE CASCADE,
  created_date Date
);