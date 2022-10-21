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

#### 3. Create .env file and adding your Mongo DB

On your Sever folder you MUST create an .env file.

```
touch .env
```

In that .env you need to add

```
MONGOURL= "Whatever you get back from the mongo db url"
```

In your Client folder you must create an .env file.

```
touch .env
```

In that .env you need to add

```
REACT_APP_BASE_URL= " Whatever your server's localhost is, example: 'http://localhost:8081' "
```

#### 4. Setting up Mongo DB

Here is a [video](https://youtu.be/bhiEJW5poHU) on how to setup your MongoDB.
You have to open a Free account with [Mongo DB](https://www.mongodb.com/cloud/atlas/register)
Once you have an account, please follow the [video](https://youtu.be/bhiEJW5poHU) instructions to setup a free database. Once your free Database has been setup, you will have a Mongo DB URL. Please add that URL in your .env file as shown in step 3.

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

Provide the functionality to allow for multiple people to contribute to an online Comment.

#### User Stories:

- As an anonymous user I can post a message to the comment
- An optional name field will be there if a user wants to add their name. If the name field is blank the entry will display: "Anonymous User".
- As an anonymous user I can retrieve the list of coment entries, sorted by creation time. For
  each entry, I see the message, the name (if provided) or "Anonymous User", as well as date & time of when it was posted.

#### Requirements

- Entries must be saved into your MongoDB Database.
- MongoDB can only be accessed by your Backend Server.

#### Notes

- Please work independently without code review by others and state any assumptions you made or
  questions you had along the way. When complete, note how much time you spent from beginning
  to end.
- Be creative with your solution—there is no 100% correct solution. We are just as interested in how you approach the problem as we are in the actual solution.
- Please Design it as you see fit. The app is simple by it's nature so do not stress if your app is simplistic/minimalist.

#### Tips

Try and keep these 3 things in mind.

- Scalability
- Organization
- DRY

# Questions

Once completed please answer the following questions.

### Did you add any libraries or NPM packages (please leave blank if no)

### What would be your approach to ensuring the application is ready for production (testing)?

### If your form was given a new type of input field (such as a number field), how reusable are your components?

### What did you not include in your solution that you want us to know about? Were you short on time and not able to include something that you want us to know about? Please list it here so that we know that you considered it.

### Other information about your submission that you feel it's important that we know if applicable.

### Your feedback on this technical challenge

Have feedback for how we could make this assignment better? Please let us know.
