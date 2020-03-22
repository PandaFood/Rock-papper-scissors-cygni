# API

## View game
#### Request
Request URL:
```http
GET /api/game/:gameID
```

#### Response
An example response from a completed game.

```javascript
{
    "gameID": "0080fa58-4ece-4dfe-83a0-14c22ff2f451",
    "timeCreated": "2020-03-22T11:49:11.453Z",
    "creator": {
        "name": "Johan"
    },
    "opponent": {
        "name": "Per"
    },
    "moveset": "Classic",
    "winner": "The winner is Johan with Rock against Pers Scissor"
}
```


## Create game
#### Request
Request URL:
```http
POST /api/game/
```

Request Parameters:
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | **Required**. Your name |

Example body:
```javascript
{
    "name": "Jonathan"
}
```
#### Response
A new game will be created and the game id will be returned.

Example response:
```javascript
{
    "gameID": "3a42e2e5-bb70-449a-8f39-79017156750a"
}
```

## Join game
#### Request
Request URL:
```http
POST /api/game/:gameID/join
```

Request Parameters:
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | **Required**. Your name |

Example body:
```javascript
{
	"name": "Jonathan"
}
```
#### Response
If successful, the respose will only be a code ```200```.

If its unsuccesful, an error will be returned

## Make move
#### Request
Request URL:
```http
POST /api/game/:gameID/move
```

Request Parameters:
| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | **Required**. Your name |
| `move` | `string` | **Required**. Your move |

Example body:
```javascript
{
	"name": "Jonathan",
	"move": "Scissor"
}
```

#### Response

If successful, the respose will only be a code ```200```.

If its unsuccesful, an error will be returned
