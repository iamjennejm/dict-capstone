-- migrate:up
CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  task VARCHAR(255),
  is_completed BOOLEAN,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- migrate:down
DROP TABLE IF EXISTS todos;