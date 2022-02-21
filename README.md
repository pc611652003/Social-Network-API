# Social-Network-API

## Description

An API is needed for a social network web application. So users can share their thoughts, react to friends' thoughts, and create a friend list.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Credits](#credits)
* [Results](#results)
* [Screenshots](#screenshots)

## Installation

To install necessary dependencies, run the following commands in command line:
npm i

## Usage

To use the application, run the following commands:
npm start

## Features

1. Add, Update, or Delete a User
2. Get one or all Users' info
3. Add or Delete a friend
4. Add, Update, or Delete a thought
5. Get one or all Thoughts' info
6. Add or Delete a Reaction

## Credits

Third-Party Assets:
1. Express.js
2. MongoDB 

## Results

Walkthrough Video: https://drive.google.com/file/d/1R09myncLGm7LBOIy31dRHdfwN674SScR/view

Repository: https://github.com/pc611652003/Social-Network-API

## Screenshots

User uses "npm start" to start the application
![Start](screenshots/Start.PNG "Starting in Terminal")

User can use GET /api/users to get all users' info
![GetAllUsers](screenshots/GetUsers.PNG "Get All Users")

User can use POST /api/users to create a user
![AddUser](screenshots/AddUser.PNG "Add User")

User can see the new user added to the DB
![AddUserResult](screenshots/AddUserResult.PNG "Add User Result")

User can use GET /api/users/:userId to get all info of a specific user
![GetUser](screenshots/GetUserByID.PNG "Get User")

User can use PUT /api/users/:userId to update a specific user's info
![UpdateUser](screenshots/UpdateUser.PNG "Update User")

User can see the user's info is updated in the DB
![UpdateUserResult](screenshots/UpdateUserResult.PNG "Update User Result")

User can use DELETE /api/users/:userId to delete a specific user
![DeleteUser](screenshots/DeleteUser.PNG "Delete User")

User can see the user is deleted in the DB
![DeleteUserResult](screenshots/DeleteUserResult.PNG "Delete User Result")

User can use POST /api/users/:userId/friends/:friendId to add a friend
![AddFriend](screenshots/AddFriend.PNG "Add Friend")

User can see the user has a friend now
![AddFriendResult](screenshots/AddFriendResult.PNG "Add Friend Result")

User can use DELETE /api/users/:userId/friends/:friendId to remove a friend
![DeleteFriend](screenshots/DeleteFriend.PNG "Delete Friend")

User can see the user unfriend the friend now
![DeleteFriendResult](screenshots/DeleteFriendResult.PNG "Delete Friend Result")

User can use GET /api/thoughts to get all thoughts' info
![GetAllThoughts](screenshots/GetThoughts.PNG "Get All Thoughts")

User can use POST /api/thoughts to create a thought
![AddThought](screenshots/AddThought.PNG "Add Thought")

User can see the new thought added to the DB
![AddThoughtResult](screenshots/AddThoughtResult.PNG "Add Thought Result")

User can use GET /api/thoughts/:thoughtId to get all info of a specific thought
![GetThought](screenshots/GetThoughtByID.PNG "Get Thought")

User can use PUT /api/thoughts/:thoughtId to update a specific thought's info
![UpdateThought](screenshots/UpdateThought.PNG "Update Thought")

User can see the thought's info is updated in the DB
![UpdateThoughtResult](screenshots/UpdateThoughtResult.PNG "Update Thought Result")

User can use DELETE /api/thoughts/:thoughtId to delete a specific thought
![DeleteThought](screenshots/DeleteThought.PNG "Delete Thought")

User can see the thought is deleted in the DB
![DeleteThoughtResult](screenshots/DeleteThoughtResult.PNG "Delete Thought Result")

User can use POST /api/thoughts/:thoughtId/reactions to add a Reaction
![AddReaction](screenshots/AddReaction.PNG "Add Reaction")

User can see the thought has a reaction now
![AddReactionResult](screenshots/AddReactionResult.PNG "Add Reaction Result")

User can use DELETE /api/thoughts/:thoughtId/reactions to remove a reaction
![DeleteReaction](screenshots/DeleteReaction.PNG "Delete Reaction")

User can see the thought does not have that reaction anymore
![DeleteReactionResult](screenshots/DeleteReactionResult.PNG "Delete Reaction Result")

When user removing a user, all associated thoughts are deleted, also the user will be removed from anyone's friend list 
![BonusFigure](screenshots/BonusFigure.PNG "Bonus Figure")

The result is shown in this screenshot
![BonusFigureResult](screenshots/BonusFigureResult.PNG "Bonus Figure Result")