React Class Component

We used to build React apps with Class components. Here are the key differences of class components:

## Key differences

- When using Class components, Hooks are off the plate!
- Inside a class component we must use the `this` keyword
- class components use lifecycle methods instead of hooks
- if the component needs a state, use a class component. If the component does not need to use state, just create a functional stateless component

## Lifecycle Methods

Instead of relying on hooks, class components are using lifecycle methods. We've looked at the following diagram:

- [Lifecycle Methods](./lifecycle.jpeg)

## Quotes App

We've built a movie quotes app using class components. We did all the CRUD operations on quotes.

- quotes_server

  - npm install
  - change your db credentials in db client
  - run the schema and the seed
  - npm start

- client

  - yarn start
