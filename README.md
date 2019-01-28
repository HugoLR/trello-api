# Trello API

## Context

Can you imagine the world without Trello? Surely it’s one of the best management web applications on Internet.

## The Assignment

You’ll build a basic Trello API to control lists and cards.

### Setup Instructions

In Terminal:

```sh
# (1) Create a new project
$ mkdir trello-api

# (2) Install Express.js and configure your project
$ npm install --save «package-name»

# (3) Run nodemon and start coding
$ nodemon «your-main-file.js»
```

### Deliverables

+ A GitHub repository
+ You will need to push your code to github

```sh
git add .
git commit -m "«your commit msg»"
git push origin master
```

## Entry JSON Model Data

```json
{
  "boards": [{
    "lists": [{
      "id": "1",
      "name": "To Do",
      "created_at": "Jan 14 2019",
      "cards": [{
        "id": "1",
        "name": "Take SCRUM test"
      }, {
        "id": "2",
        "name": "Learn GraphQL Testing Strategies"
      }]
    }, {
      "id": "2",
      "name": "Doing",
      "created_at": "Feb 10 2019",
      "cards": [{
        "id": "1",
        "name": "Jenkins + CI"
      }]
    }, {
      "id": "3",
      "name": "Done",
      "created_at": "Apr 22 2019",
      "cards": [{
        "id": "1",
        "name": "MongoDB Certification"
      }, {
        "id": "2",
        "name": "Payment to AWS Account"
      }]
    }]
  }] 
}
```

## Normal Mode

### Endpoints

#### `1. GET /api/lists`

Respond with the entire lists array, with status 200.

#### `2. GET /api/lists` + listId

Respond with the entire list object related to `listId`.

If the list is found, respond with status 200 and send that list object.
If no list was found, respond with a status of 404.

#### `3. POST /api/lists`

A list's information will be sent in the request body. It will contain the same type of list information contained in the other list objects, except for the ID. You will need to add an ID to this list object before adding it to the lists array.

The list IDs are sequential. If the last list object had an ID of 100, the new list object should have an ID of 101 and the next list object added should have an ID of 102, etc.

You should return status 200 along with the entire array of list objects after the new list object has been added.

#### `4. PUT /api/lists` + listId

A list's information will be sent in the request body. It will contain the same type of list information container in the other list objects. You should update the list object that has an ID matching the listId parameter.

Return with status 200, and the entire array of list objects after you have updated the correct list object.

#### `5. DELETE /api/lists` + listId

**RULE: If the list have cards saved, you can NOT remove it. Make sure first that `cards` array is empty.**

You should remove the list with an ID matching the listId parameter.

Return status 200 and the array of list objects after the correct list object has been removed from the array.

#### `6. GET /api/lists/` + listId + `/cards`

Respond with the entire cards array related to `listId`.

If the list is found, respond with status 200 and send that cards array.
If no list was found, respond with a status of 404.

#### `7. GET /api/lists/` + listId + `/cards` + cardId

Respond with the entire card object related to `cardId`.

If the card is found, respond with status 200 and send that card object.
If no card was found, respond with a status of 404.

#### `8. POST /api/lists/` + listId + `/cards`

A card's information will be sent in the request body. It will contain the same type of card information contained in the other card objects, except for the ID. You will need to add an ID to this card object before adding it to the cards array.

The card IDs are sequential. If the last card object had an ID of 100, the new card object should have an ID of 101 and the next card object added should have an ID of 102, etc.

You should return status 200 along with the entire array of card objects after the new card object has been added.

#### `9. PUT /api/lists/` + listId + `/cards` + cardId

A card's information will be sent in the request body. It will contain the same type of card information container in the other card objects. You should update the card object that has an ID matching the cardId parameter.

Return with status 200, and the entire array of card objects after you have updated the correct card object.

#### `10. DELETE /api/lists/` + listId + `/cards` + cardId

You should remove the card with an ID matching the cardId parameter.

Return status 200 and the array of card objects after the correct card object has been removed from the array.

## Explorer Mode

### Endpoints

#### `1. GET /api/lists`

This endpoint can be called with one of these queries, which you should be prepared to address:

+ name: Return all lists whose name include filter value from query.

```js
// Example request URL
localhost:3000/api/lists?name=react
```

+ date: Return all lists ordered by date in ASC or DESC.

```js
// Example request URL
localhost:3000/api/lists?date=asc
```

**When all endpoints are done, deploy your application to Heroku.**