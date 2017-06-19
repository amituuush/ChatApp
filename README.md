# Instant Message Web Application
* Frontend built using React as a View layer, Redux for state management, and SASS as a css-preprocessor
* Mocha and Enzyme for unit testing
* Axios as a http library
* Redux-thunk to handle async action creators in Redux
* Live deployment on Heroku [here](http://bit.ly/2mUGCYs)

## Live deployment 
Navigate to different browsers (ex. Chrome and Firefox) or navigate to a browser in incognito mode and in regular mode. Join the same chatroom and watch the app do it's thing!

## Installation and Dependencies
This repo uses yarn as a package manager. [Yarn can be installed using homebrew.](https://yarnpkg.com/en/docs/install)

1. Clone repo locally
2. Run `yarn install` to install all dependencies
3. Run `npm start`
4. Navigate to [http://localhost:8088/](http://localhost:8088/)

## Testing
Use the command `npm test` to run the test suite.

~~**Note: The async action creator test is still under development. Working on getting this fixed ASAP.~~ Fixed :)

## Other Considerations and Possible Improvements
I built the app in React and Redux because I love the one way data flow of React and unit testing is simple. One could also argue that React is better for larger applications due to its innate ability to create reusable components and that a framework like Vue.js would be more appropriate. Given my love for React and the reasons stated above, I decided to go the React/Redux route.

**Directory structure**: I learned this directory structure pattern pretty early on and it has become very intuitive to me. I can easily navigate to my component of choice, and making stylistic changes to individual components is a breeze because of its modularity. On the redux side, actions and reducers are simply broken apart, and action types sit in their own folder to easily import them into reducer files. If my action creator list grew any larger, I'd probably create a new action creator file and organize by route or some other methodology.

**Container component pattern**: Because of the size of the app, I wanted to keep the flow of props in the app super simple, so I only made the top-level `<App />` component aware of state and connected to Redux. From there, all state was passed down to child components. I included PropTypes in each component for documentation and readability. Another approach would be to make all components that need to be aware of state into container components. For simplicity's sake and for simple visualization purposes, I chose the former.

**Responsiveness**: Due to a lack of time, the app is not responsive on all device types. It gets down to about 500px before things start to fall off the screen. In future iterations, I would totally make this app function on all device types.

**Polling vs sockets**: Again, due to a time constraint and given that this was a front end project, I wanted to focus most of my time on getting a MVP up first before I made things sexy. Therefore, to keep the app running in real-time, I used polling to fetch messages every 3 seconds. This was an arbitrary number and could easily be more or less. In future iterations, I'd implement sockets to make the app function in real-time as much as possible.

**Redux-thunk**: I used redux-thunk because I needed to dispatch multiple actions whenever a user clicked on a chatroom or sent a message. During the former, I needed to dispatch an action which would handle the data retrieved about the room (name and users) as well as fetch the messages for the particular room. During the latter, I needed to dispatch an action to send a POST request to post a message to the database while also checking to see if the particular user who just sent a message has already participated in the room. If not, it would add the users name to the room user list, which is displayed in the chat header.

Another enhancement that could be made to my action creators is to dispatch an action based on the status of the request. For example: I could dispatch actions for during a pending, fulfilled, and rejected state.

**Auth**: Due to a time constraint, I decided to create a make-shift auth feature on the app. It's quite simple: when a user enters their name in the initial screen, I save that name to the state. Then depending on this piece of state, I either render the `<Login />` component, or the chat app component. I also save the username to local storage, so that a user doesn't have to "log in" again after refreshing the page. A logout button is there if a user wants to change their username or simply log out of the app.

**Testing**: Again, due to a time constraint, I didn't get to test everything I would in a production level app. Therefore, I created tests for a component rendering, a reducer, and an async action creator. 
~~The async action creator test is still not functioning, as I'm currently working on getting that fixed.~~ Fixed :)

**Other improvements**:
* Ability to create a new chatroom
* User gets to choose an emoji avatar
* Showing "user is typing"
* Ability to send emoji's
* Edit/delete last message
* Time stamps
* Implement a real database (currently an in memory db on the server)