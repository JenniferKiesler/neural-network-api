# Neural Network API

## Description

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

In this application,
- there are GET routes that return all users, one user, all thoughts, and one thought.
- there are POST routes that create a user, thought, or reaction.
- there is a POST route that adds a new friend to a user's friend list.
- there are PUT routes that update a user or thought.
- there are DELETE routes that remove a user, a friend from a user's friend list, a thought, or a reaction.
- when a user is removed, the user's associated thoughts are deleted.
- when a thought is created, the thought's id is pushed to the associated user's thoughts array.

This application uses [Express.js](https://www.npmjs.com/package/express) for routing, a MongoDB database, and the [Mongoose](https://www.npmjs.com/package/mongoose) ODM.

## Usage

This application is invoked by using the following command: 
```
npm run dev
```

## Walkthrough Video

Use the link below to view a walkthrough of this application (if the video is blurry, download the video).

## Questions

Feel free to contact me at jennyhawes24@gmail.com or look at my [Github](https://github.com/JenniferKiesler).