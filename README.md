
# Mono

A backend service for a demo app that allows a user link and view financial transactions.
The API service allows for the creation, retrieval and management of users and user linked data (accounts and tokens).A user signs up with basic credentials (firstname, lastname, email and password) and has the ability to link bank accounts. With linked bank accounts the user can view transaction details, view total balance and delete user account along with any linked data.


## API Reference

#### Register

```http
  POST /v1/auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstname` | `string` | **Required**. |
| `lastname` | `string` | **Required**. |
| `email` | `string` | **Required**. |
| `password` | `string` | **Required**. |

#### Login

```http
  POST /v1/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. |
| `password` | `string` | **Required**. |


#### Refresh Authentication Tokens

```http
  POST /v1/auth/refresh-tokens
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `refreshToken` | `string` | **Required**. |


#### Get Logged In Users linked accounts

```http
  GET /v1/users/account/:userid
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userid` | `string` | **Required**. |


#### Get all transactions from linked accounts

```http
  GET /v1/users/account/transactions/:monoid
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `monoid` | `string` | **Required**. |


#### Manually sync data

```http
  GET /v1/users/account/sync/:monoid'
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `monoid` | `string` | **Required**. |

#### Get Mono Reauth Code

```http
  GET /v1/users/account/reauth/:monoid'
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `monoid` | `string` | **Required**. |

#### Unlink mono account

```http
  GET /v1/users/account/unlink/:monoid/:accountid'
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `monoid` | `string` | **Required**. |
| `accountid` | `string` | **Required**. |

#### Delete Account

```http
  Delete /v1/users/account/:userid'
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userid` | `string` | **Required**. |



## Authors

- [@tobialagbe](https://www.github.com/tobialagbe)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Run Locally

Clone the project

```bash
  git clone https://github.com/tobialagbe/monotest-backend
```

Go to the project directory

```bash
  cd monotest-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Appendix

Project still in development

