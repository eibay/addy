# Addy
A simple node server that provides api endpoints for an address book. The initial set of users
are seeded automatically via data.json file. It uses local storage to persist address book data. Name and phone number is hashed and will be used as Id for the newly created user.

It has the following set of features that can be accessed via API endpoints:

- add new user with simple verification, given the name and phone no, while friends list can be blank

- list all users

- any user can add existing user to his friend's list

- given 2 user names, a compare endpoint can generate unique friends list union

- user can list his friends, sorted in alphabetical order

## Todos
- Major integrations tests are created using Jest and Supertest. There's a need for more unit tests for better coverage.

## To Install and Run
- npm install
- nodemon server.js

## Built with
- node: v14.9.0
- npm: 6.14.8

## Running Test
- npm run dev-test


### Optional
If you want to turn on debugging using Morgan:
- export DEBUG=app:*
