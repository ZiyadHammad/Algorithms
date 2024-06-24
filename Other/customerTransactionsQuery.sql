-- Given the following data definition, write a query that selects 
-- all the customer names together with the number of transactions
-- that they made. Customers with no transactions should
-- be included as customers with 0 transactions.

-- Suggested testing environments
-- For MS SQL:
-- https://sqliteonline.com/ with language set as MS SQL
-- For PostgreSQL:
-- https://sqliteonline.com/ with language set as PostgreSQL
-- For MySQL:
-- https://www.db-fiddle.com/ with MySQL version set to 8
-- For SQLite:
-- http://sqlite.online/
-- Put the following without '--' at the top to enable foreign key support in SQLite.
-- PRAGMA foreign_keys = ON;

-- Example case create statement:
CREATE TABLE customers (
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE transactions (
  id INTEGER NOT NULL PRIMARY KEY,
  customerId INTEGER,
  amount DECIMAL(15,2) NOT NULL,
  FOREIGN KEY (customerId) REFERENCES customers(id)
);

INSERT INTO customers(id, name) VALUES(1, 'Steve');
INSERT INTO customers(id, name) VALUES(2, 'Jeff');
INSERT INTO transactions(id, customerId, amount) VALUES(1, 1, 100);
INSERT INTO transactions(id, customerId, amount) VALUES(2, 1, 150);

-- Expected output (in any order):
-- name     transactions
-- -------------------------------
-- Steve    2
-- Jeff     0

-- Explanation:
-- In this example.
-- There are two customers, Steve and Jeff.
-- Steve has made two transactions. Jeff has made zero transactions.

Table customers
  id INTEGER NOT NULL PRIMARY KEY
  name VARCHAR(30) NOT NULL

TABLE transactions
  id INTEGER NOT NULL PRIMARY KEY
  customerid INTEGER
  amount DECIMAL(15, 2) NOT NULL
  FOREIGN KEY (customerId) REFERENCES customers(id)