# beauhurstTest

## Setup:

### From github:
Clone the repository
Create two terminals and cd into both /client and /server
Install dependencies using npm i in /client and /server (assuming npm is installed)

### setup the database:
ensure postgresql is installed and running
link to install: https://www.postgresql.org/download/

#### .env file
Create a file '.env' into the /Server folder
copy and paste the code below:

PGUSER='postgres'
PGHOST='localhost'
PGDATABASE='postgres'
PGPASSWORD=null
PGPORT=5432

### run the backend and server:
in /server, run: npm run start

### run the client server:
in /client, run: npm run start
