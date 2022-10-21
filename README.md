# DevShed Digital Full Stack Journal/Comment App.

### Getting started

#### 1. Get to know your stack and tools

This project is built on the MERN Stack ([Mongo](https://www.mongodb.com/docs/), [Express](https://expressjs.com/), [React](https://reactjs.org/), [Node](https://nodejs.org/en/))

#### 2. Install your dependencies

In both your server and your client you must run

```
npm i
```

#### 3. Create .env file and adding your Mongo DB

On your Sever file you MUST create an .env file.

```
touch .env
```

In that .env you need to add

```
MONGOURL= "Whatever you get back from the mongo db url"
```

#### 4. Setting up Mongo DB

Here is a [video](https://youtu.be/bhiEJW5poHU) on how to setup your MongoDB.
You have to open a Free account with [Mongo DB](https://www.mongodb.com/cloud/atlas/register)
Once you have an account, please follow the [video](https://youtu.be/bhiEJW5poHU) instructions to setup a free database. One your free Database has been setup, you will have a Mongo DB URL. Please add that URL in your .env file as shown in step 3.

#### 5. Start the app

Client - localhost3000

```
npm run start
```

Server - localhost8080

```
npm run start
```
