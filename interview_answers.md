# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

    A) Context API helps share state to multiple components without having to use tedious amounts of prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

     A) Actions are used to carry information the store. The store is a container that holds the application state (state that every component in the app can have access to). Reducers are functions used to change the application state based on what the 'action' describes. The store is known as a 'single source of truth' because it holds the application state (the global information) is held.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

  A) It allows us to return functions (instead of just actions) within Redux. If the action is returning a function, dispatch is passed into that function.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

  A) Context API's is definitely my favorite way to pass state to components. As for managing state, right now I'm preferring the old way (writing components to handle it) because it doesn't take as much jumping back and forth between three files at a time to get things working. I'm hoping I get better with Redux and the reducer pattern though. Maybe it's just me being new that makes it feel like these two (right now) are just very frustrating.