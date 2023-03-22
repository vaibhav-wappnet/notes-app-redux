import { createStore } from "redux";
import rootReducer from "./Reducers/index";


const saveToLocalStorage = (state) => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("persistentState", serializedState);
}

const LoadFromLocalStorage = () => {
    let serializedState = null;
    // console.log(localStorage);
    if (!localStorage) {
        return "not set";
    }
    serializedState = localStorage.getItem("persistentState");
    // console.log(localStorage);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
}

const store = createStore(
    rootReducer,
    LoadFromLocalStorage(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;