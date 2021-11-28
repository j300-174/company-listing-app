-- ** Average employee count **
-- ANS:
SELECT AVG(employee_count) FROM tbl_companies;
/*
  avg
  ----------------------
  235.1000000000000000
*/
-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

-- Average deal amount raised by country
SELECT valuation, company_name FROM tbl_deals JOIN tbl_companies
ON tbl_deals.company_name = tbl_companies.name GROUP BY country;

-- get both..
SELECT * FROM tbl_deals JOIN tbl_companies ON company_name = name;

-- works out average valuation || amount invested for each company
SELECT company_name, AVG(valuation) FROM tbl_deals GROUP BY company_name;
SELECT company_name, AVG(amount_invested) FROM tbl_deals GROUP BY company_name;

-- retrieved all countries & valuation ||
-- amount invested, now needs to workout avg
SELECT tbl_companies.country, tbl_deals.valuation FROM tbl_deals, tbl_companies
GROUP BY tbl_deals.valuation, tbl_companies.country;

SELECT tbl_companies.country, tbl_deals.amount_invested FROM tbl_deals,
tbl_companies GROUP BY tbl_deals.amount_invested, tbl_companies.country;

-- command retrieves all amount invested by each company & their country
-- now need to workout avg per country
SELECT tbl_deals.amount_invested, tbl_deals.company_name, tbl_companies.country
FROM tbl_deals, tbl_companies WHERE tbl_deals.company_name = tbl_companies.name;
-- deal amount (valuation)
SELECT tbl_deals.valuation, tbl_deals.company_name, tbl_companies.country
FROM tbl_deals, tbl_companies WHERE tbl_deals.company_name = tbl_companies.name;

-- ** command works out the average invested grouped by country **
/*
  avg          | country
  -----------------------+---------
  13050000.000000000000 | GBR
  550000.000000000000 | USA
*/

SELECT AVG(tbl_deals.amount_invested), tbl_companies.country
FROM tbl_deals, tbl_companies WHERE tbl_deals.company_name = tbl_companies.name
GROUP BY tbl_companies.country;

-- valuation ANS:
SELECT AVG(tbl_deals.valuation), tbl_companies.country
FROM tbl_deals, tbl_companies WHERE tbl_deals.company_name = tbl_companies.name
GROUP BY tbl_companies.country;

-- \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

-- ** Total amount invested per quarter over time **
-- Sums up amount invested by quarter, need to consider yearly aswell
SELECT SUM(tbl_deals.amount_invested), date_part('quarter', date) AS quarter
FROM tbl_deals GROUP BY quarter;
-- sums amount invested by quarter for each year
SELECT SUM(tbl_deals.amount_invested), date_part('quarter', date) AS quarter,
date_part('year', date) AS year FROM tbl_deals GROUP BY quarter, year,
amount_invested;
-- sums amount
SELECT SUM(tbl_deals.amount_invested), date_part('quarter', date) AS quarter,
date_part('year', date) AS year FROM tbl_deals GROUP BY quarter, year;
-- SUMS amount invested per quarter, per year
-- ANS:
SELECT SUM(amount_invested), date_part('quarter', date) AS quarter,
date_part('year', date) AS year FROM tbl_deals GROUP BY year, quarter;
/*
  sum    | quarter | year
  ----------+---------+------
  10000000 |       1 | 2021
  15000000 |       2 | 2011
  30000000 |       3 | 2013
  1350000 |       1 | 2018
  10000000 |       4 | 2015
*/
