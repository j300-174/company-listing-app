CREATE TABLE tbl_deals (
  deals_id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  amount_invested INTEGER NOT NULL,
  valuation INTEGER NOT NULL,
  company_name TEXT NOT NULL REFERENCES company(name)
);

DROP TABLE tbl_deals CASCADE;

INSERT INTO tbl_deals (company_name, date, amount_invested, valuation)
SELECT * FROM json_to_recordset(
  '[
      {
          "company": "Stella Novus",
          "date": "2011-04-06",
          "amount_invested": 15000000,
          "valuation": 100000000
      },
      {
          "company": "Stella Novus",
          "date": "2013-07-10",
          "amount_invested": 30000000,
          "valuation": 150000000
      },
      {
          "company": "Stella Novus",
          "date": "2015-10-30",
          "amount_invested": 10000000,
          "valuation": 250000000
      },
      {
          "company": "Micronus",
          "date": "2018-01-16",
          "amount_invested": 250000,
          "valuation": 1000000
      },
      {
          "company": "Neocell Systems",
          "date": "2018-02-06",
          "amount_invested": 1000000,
          "valuation": 5000000
      },
      {
          "company": "Networx",
          "date": "2018-03-27",
          "amount_invested": 100000,
          "valuation": 500000
      },
      {
          "company": "Consultio/Consultius",
          "date": "2021-01-01",
          "amount_invested": 10000000,
          "valuation": 100000000
      }
  ]'
) AS x(company text, date date, amount_invested integer, valuation integer);

SELECT * FROM tbl_deals;
