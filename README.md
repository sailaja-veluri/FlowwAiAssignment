# Personal Expense Tracker

Given a file `app.js` and a SQLite database file `db.js` consisting of tables `transactions` and `categories`.

Write APIs to perform operations on the `transactions` and `categories` tables, which contain the following columns:

## Transactions Table

| Columns       | Type    |
| ------------- | ------- |
| id            | INTEGER |
| type          | TEXT    |
| category      | TEXT    |
| amount        | REAL    |
| date          | TEXT    |
| description   | TEXT    |

## Categories Table

| Columns       | Type    |
| ------------- | ------- |
| id            | INTEGER |
| name          | TEXT    |
| type          | TEXT    |

### API 1

#### Path: `/api/transactions/`

#### Method: `GET`

#### Description:

Returns a list of all transactions.

#### Response

```json
[
  {
    "id": 1,
    "type": "income",
    "category": "Salary",
    "amount": 5000,
    "date": "2024-10-01",
    "description": "Monthly salary"
  },
  ...
]

### API 2

### Path: /api/transactions/

### Method: POST

### Description:

Creates a new transaction in the database. id is auto-incremented.

### Request
{
  "type": "expense",
  "category": "Food",
  "amount": 50,
  "date": "2024-10-10",
  "description": "Grocery shopping"
}

#### Response
{
  "message": "Transaction Added",
  "id": 3
}

### API 3

### Path: /api/transactions/:id/

### Method: GET

### Description:

Returns a transaction based on the transaction ID.

### Response

{
  "id": 1,
  "type": "income",
  "category": "Salary",
  "amount": 5000,
  "date": "2024-10-01",
  "description": "Monthly salary"
}


### API 4

### Path: /api/transactions/:id/

### Method: PUT

### Description:

Updates the details of a transaction in the database based on the transaction ID.

### Request

{
  "type": "expense",
  "category": "Entertainment",
  "amount": 100,
  "date": "2024-10-15",
  "description": "Movie night"
}

### Response

{
  "message": "Transaction Updated"
}

### API 5

### Path: /api/transactions/:id/

### Method: DELETE

### Description:

Deletes a transaction from the database based on the transaction ID.

### Response

{
  "message": "Transaction Deleted"
}

### API 6

### Path: /api/summary

### Method: GET

### Description:

Retrieves a summary of transactions (total income, total expenses, and balance). Supports optional query parameters for filtering by category and date range.

Query Parameters
category (optional): Filter by transaction category.
startDate (optional): Filter transactions from this date (format: YYYY-MM-DD).
endDate (optional): Filter transactions until this date (format: YYYY-MM-DD).


### Response

{
  "totalIncome": 5000,
  "totalExpenses": 100,
  "balance": 4900
}






Got it! Here’s the complete README.md file with all API details presented sequentially in one section:

markdown
Copy code
# Personal Expense Tracker

Given a file `app.js` and a SQLite database file `expenseTracker.db` consisting of tables `transactions` and `categories`.

Write APIs to perform operations on the `transactions` and `categories` tables, which contain the following columns:

## Transactions Table

| Columns       | Type    |
| ------------- | ------- |
| id            | INTEGER |
| type          | TEXT    |
| category      | TEXT    |
| amount        | REAL    |
| date          | TEXT    |
| description   | TEXT    |

## Categories Table

| Columns       | Type    |
| ------------- | ------- |
| id            | INTEGER |
| name          | TEXT    |
| type          | TEXT    |

## API Endpoints

### 1. Get All Transactions

#### Path: `/api/transactions/`

#### Method: `GET`

#### Description:

Returns a list of all transactions.

#### Response

```json
[
  {
    "id": 1,
    "type": "income",
    "category": "Salary",
    "amount": 5000,
    "date": "2024-10-01",
    "description": "Monthly salary"
  },
  {
    "id": 2,
    "type": "expense",
    "category": "Food",
    "amount": 50,
    "date": "2024-10-10",
    "description": "Grocery shopping"
  }
]
2. Create a New Transaction
Path: /api/transactions/
Method: POST
Description:
Creates a new transaction in the database. id is auto-incremented.

Request
json
Copy code
{
  "type": "expense",
  "category": "Food",
  "amount": 50,
  "date": "2024-10-10",
  "description": "Grocery shopping"
}
Response
json
Copy code
{
  "message": "Transaction Added",
  "id": 3
}
3. Get Transaction by ID
Path: /api/transactions/:id/
Method: GET
Description:
Returns a transaction based on the transaction ID.

Response
json
Copy code
{
  "id": 1,
  "type": "income",
  "category": "Salary",
  "amount": 5000,
  "date": "2024-10-01",
  "description": "Monthly salary"
}
4. Update Transaction by ID
Path: /api/transactions/:id/
Method: PUT
Description:
Updates the details of a transaction in the database based on the transaction ID.

Request
json
Copy code
{
  "type": "expense",
  "category": "Entertainment",
  "amount": 100,
  "date": "2024-10-15",
  "description": "Movie night"
}
Response
json
Copy code
{
  "message": "Transaction Updated"
}
5. Delete Transaction by ID
Path: /api/transactions/:id/
Method: DELETE
Description:
Deletes a transaction from the database based on the transaction ID.

Response
json
Copy code
{
  "message": "Transaction Deleted"
}
6. Get Summary of Transactions
Path: /api/summary
Method: GET
Description:
Retrieves a summary of transactions (total income, total expenses, and balance). Supports optional query parameters for filtering by category and date range.

Query Parameters
category (optional): Filter by transaction category.
startDate (optional): Filter transactions from this date (format: YYYY-MM-DD).
endDate (optional): Filter transactions until this date (format: YYYY-MM-DD).
Response



{
  "totalIncome": 5000,
  "totalExpenses": 100,
  "balance": 4900
}














# Cricket Team

Given two files `app.js` and a database file `cricketTeam.db` consisting a table `cricket_team`.

Write APIs to perform operations on the table `cricket_team` containing the following columns,

| Columns       | Type    |
| ------------- | ------- |
| player_id     | INTEGER |
| player_name   | TEXT    |
| jersey_number | INTEGER |
| role          | TEXT    |

### API 1

#### Path: `/players/`

#### Method: `GET`

#### Description:

Returns a list of all players in the team

#### Response

```
[
  {
    playerId: 1,
    playerName: "Lakshman",
    jerseyNumber: 5,
    role: "All-rounder"
  },

  ...
]
```

### API 2

#### Path: `/players/`

#### Method: `POST`

#### Description:

Creates a new player in the team (database). `player_id` is auto-incremented

#### Request

```
{
  "playerName": "Vishal",
  "jerseyNumber": 17,
  "role": "Bowler"
}
```

#### Response

```
Player Added to Team
```

### API 3

#### Path: `/players/:playerId/`

#### Method: `GET`

#### Description:

Returns a player based on a player ID

#### Response

```
{
  playerId: 1,
  playerName: "Lakshman",
  jerseyNumber: 5,
  role: "All-rounder"
}
```

### API 4

#### Path: `/players/:playerId/`

#### Method: `PUT`

#### Description:

Updates the details of a player in the team (database) based on the player ID

#### Request

```
{
  "playerName": "Maneesh",
  "jerseyNumber": 54,
  "role": "All-rounder"
}
```

#### Response

```
Player Details Updated

```

### API 5

#### Path: `/players/:playerId/`

#### Method: `DELETE`

#### Description:

Deletes a player from the team (database) based on the player ID

#### Response

```
Player Removed
```

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
