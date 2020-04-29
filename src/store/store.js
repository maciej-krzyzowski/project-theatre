import { createStore } from "redux";
import spectacles from "../reducers/index";

/* eslint-disable no-underscore-dangle */
const store = createStore(
    spectacles /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
