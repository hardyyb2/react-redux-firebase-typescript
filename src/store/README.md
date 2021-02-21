# Details

- **Directory Name** - store
- **Details** - redux store to create and save actions and reducers
- **Folders** -
  - _actions_ - folder to store redux actions, these are pure functions dispatched after or without async tasks
  - _constants_ - string constants to store action types names
  - _operations_ - contains async tasks to be performed before dispatching pure actions using redux-thunk
  - _reducers_ - contains the state and reducer functions to modify the state
  - _selectors_ - used to store selectors (functions to modify state object and return it)
- **Files** -
  - _configureStore_ - redux configuration file to combine reducers and add other middlewares e.g. redux-thunk, redux-logger and also config for redux dev tools

> More - [What is Redux and why use it](https://blog.logrocket.com/why-use-redux-reasons-with-clear-examples-d21bffd5835/)
