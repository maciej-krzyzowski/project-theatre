import { createStore } from "redux";
import spectacles from "../reducers/index";

const store = createStore(
    spectacles,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
