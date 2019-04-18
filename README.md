# Ratings_History_Module
## Description
The Analyst Ratings module displays data and expert recommendations in an accessible and user-friendly UI. The Purchase History module renders a dynamic and individually expanding list of past purchases. As a potential customer, I want to be able to easily and confidently determine whether I should buy, hold, or sell. As an existing customer, I want to see my history of past purchases so that I can see that I am making good purchasing decisions and/or improve future decisions. 

## Related Projects
  - [Buy/Sell Module](https://github.com/invest-ex/buy_module)
  - [Chart Module](https://github.com/invest-ex/chart_module)
  - [About Module](https://github.com/invest-ex/about_module)

## Note
Note: for a proxy server, the compressed webpack bundles (bundle.js.gz and bundle.js.br) can be uploaded to S3 rather than living in the client/dist/.


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> View buy/hold/sell analyst ratings, history past purchases.

## Requirements

- Node 6.13.0
- Package.JSON

## Development

### Installing Dependencies

From root:

```
npm run react-dev (webpack --watch -d)
npm start (node index.js not nodemon index.js)
```

## Available API Routes

The ratings and history module supports CRUD operations:
* Analyst Reviews (#Analyst Reviews)
* Purchase History (#Purchase History)

### Analyst Reviews

| Endpoint                       | Type   | Operation                                                    |
|--------------------------------|--------|--------------------------------------------------------------|
| `/api/:stockTicker`            | GET    | Retrieve analyst reviews with recs to buy, hold or sell      |


### Purchase History

| Endpoint                       | Type   | Operation                                                    |
|--------------------------------|--------|--------------------------------------------------------------|
| `/api/stock/:stockID/history`  | GET    | Retrieve a record of user past purchases of stock            |

*** More Routes On the Way! ***
