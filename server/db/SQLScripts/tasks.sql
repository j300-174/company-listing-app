-- ** Average employee count **
SELECT AVG(employee_count) FROM tbl_companies; -- 235.10

-- Average deal amount raised by country
SELECT valuation, company_name FROM tbl_deals JOIN tbl_companies
ON tbl_deals.company_name = tbl_companies.name GROUP BY country;

-- get both..
SELECT * FROM tbl_deals JOIN tbl_companies ON company_name = name;

-- works out average valuation || amount invested for each company
SELECT company_name, AVG(valuation) FROM tbl_deals GROUP BY company_name;
SELECT company_name, AVG(amount_invested) FROM tbl_deals GROUP BY company_name;

-- retrieved all countries & valuation || amount invested, now needs to workout avg
SELECT tbl_companies.country, tbl_deals.valuation FROM tbl_deals, tbl_companies GROUP BY tbl_deals.valuation, tbl_companies.country;
SELECT tbl_companies.country, tbl_deals.amount_invested FROM tbl_deals, tbl_companies GROUP BY tbl_deals.amount_invested, tbl_companies.country;

-- command retrieves all amount invested by each company & their country
-- now need to workout avg per country
SELECT tbl_deals.amount_invested, tbl_deals.company_name, tbl_companies.country
FROM tbl_deals, tbl_companies WHERE tbl_deals.company_name = tbl_companies.name;
-- deal amount (valuation)
SELECT tbl_deals.valuation, tbl_deals.company_name, tbl_companies.country
FROM tbl_deals, tbl_companies WHERE tbl_deals.company_name = tbl_companies.name;

-- ** command works out the average invested grouped by country **
SELECT AVG(tbl_deals.amount_invested), tbl_companies.country
FROM tbl_deals, tbl_companies WHERE tbl_deals.company_name = tbl_companies.name
GROUP BY tbl_companies.country;

-- valuation:
SELECT AVG(tbl_deals.valuation), tbl_companies.country
FROM tbl_deals, tbl_companies WHERE tbl_deals.company_name = tbl_companies.name
GROUP BY tbl_companies.country;

-- ** Total amount invested per quarter over time **
