# DevShed Digital Full Stack Comment App.

### Getting started

#### 1. Get to know your stack and tools

This project is built on the MERN Stack ([Mongo](https://www.mongodb.com/docs/), [Express](https://expressjs.com/), [React](https://reactjs.org/), [Node](https://nodejs.org/en/)).

Additionally, you'll have access to [Axios](https://axios-http.com/docs/intro) for your API request. If you decide to install any additional libraries or NPM packages please note them down and add a quick explaination.

#### 2. Install your dependencies

In both your server and your client you must run

```
npm i
```

#### 3. Create .env file in client

```
touch .env
```

In that .env you need to add

```
REACT_APP_BASE_URL= " Whatever your server's localhost is, example: 'http://localhost:8080' "
```

#### 5. Start the app

Client - localhost3000

```
npm run start
```

Server - localhost8080

```
npm run start
```

# Task

### First - Form

In your client a form and input that lets users Submit a color.

### Second - Post Request

In your server you should be able to take in that post request and save it into an obj. This Obj will be your dummy database.

### Third - Send Get Request

Once you've updated your Dummy Obj. Send all the data of your Object into the Client.

### Finally - Using data

In your client will be receiving the data from your backend. A dropdown with the list of colors will be shown and the client should be able to updated the background of the client with that color.

### Stretch - Style your Front End

If you have time. Style your dropdown and form to something you like
