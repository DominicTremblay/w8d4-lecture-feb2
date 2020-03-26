DROP TABLE IF EXISTS quotes CASCADE;
CREATE TABLE quotes
(
  id SERIAL PRIMARY KEY NOT NULL,
  content VARCHAR(225),
  created_date Date
);