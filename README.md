# Hukka Project Api

A brief description of what this project does and who it's for

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Features

- Get All Users
- Get Single user
- Delete user
- Update & Create user

## Tech Stack

**Server:** Node, Express

## API Reference

#### Get all Users

```http
  GET /
```

#### Get User

```http
  GET /${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
