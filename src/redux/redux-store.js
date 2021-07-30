import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebarPage: sidebarReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;