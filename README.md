# Mini Twitter API Guide

## Table of Contents

- [GET all users](https://mini-twitter-v2.herokuapp.com/users)
- [POST one user](https://mini-twitter-v2.herokuapp.com/users)
- [GET current user](https://mini-twitter-v2.herokuapp.com/users/me)
- [GET random user](https://mini-twitter-v2.herokuapp.com/users/random)
- [GET user by id](https://mini-twitter-v2.herokuapp.com/users/:id)
- [GET messages by user id](https://mini-twitter-v2.herokuapp.com/users/:id/messages)
- [GET all messages ](https://mini-twitter-v2.herokuapp.com/messages)
- [POST one message](https://mini-twitter-v2.herokuapp.com/messages)
- [SEARCH one message](https://mini-twitter-v2.herokuapp.com/messages/search/:keyword)
- [GET message by id](https://mini-twitter-v2.herokuapp.com/messages/:id)
- [DELETE message by id](https://mini-twitter-v2.herokuapp.com/messages/:id)

### GET all users

| URL                                         | Method |
| ------------------------------------------- | ------ |
| https://mini-twitter-v2.herokuapp.com/users | `GET`  |

Returns all users in the database.

### POST one user

| URL                                         | Method |
| ------------------------------------------- | ------ |
| https://mini-twitter-v2.herokuapp.com/users | `POST` |

Adds one user in the database.
Required: `username`, `handle`, `avatar`(default provided if empty)

### GET current user

| URL                                      | Method |
| ---------------------------------------- | ------ |
| https://mini-twitter-v2.herokuapp.com/me | `POST` |

Provide user handle and returns your user id.
Required: `handle`

### GET random user

| URL                                          | Method |
| -------------------------------------------- | ------ |
| https://mini-twitter-v2.herokuapp.com/random | `GET`  |

Returns a random user from database

### GET user by id

| URL                                             | Method |
| ----------------------------------------------- | ------ |
| https://mini-twitter-v2.herokuapp.com/users/:id | `GET`  |

Returns all messages for a user whose `_id` matches the `${id}` provided in the URL.
Required: `_id`

### GET all messages by user id

| URL                                                      | Method |
| -------------------------------------------------------- | ------ |
| https://mini-twitter-v2.herokuapp.com/users/:id/messages | `GET`  |

Returns all messages for a user whose `_id` matches the `${id}` provided in the URL.
Required: `_id`

### GET all messages

| URL                                             | Method |
| ----------------------------------------------- | ------ |
| https://mini-twitter-v2.herokuapp.com/messages/ | `GET`  |

Returns all messages pesent in database

### POST one message

| URL                                             | Method |
| ----------------------------------------------- | ------ |
| https://mini-twitter-v2.herokuapp.com/messages/ | `POST` |

Creates one message in database
Required: `text`, `author`

### SEARCH one message

| URL                                                            | Method |
| -------------------------------------------------------------- | ------ |
| https://mini-twitter-v2.herokuapp.com/messages/search/:keyword | `GET`  |

Finds one message in database by keword
Required: `keyword`

### GET message by id

| URL                                                | Method |
| -------------------------------------------------- | ------ |
| https://mini-twitter-v2.herokuapp.com/messages/:id | `GET`  |

Provide an id and get the message
Required: `_id`

### DELETE message by id

| URL                                                | Method   |
| -------------------------------------------------- | -------- |
| https://mini-twitter-v2.herokuapp.com/messages/:id | `DELETE` |

Provide an id and delete the message
Required: `_id`
