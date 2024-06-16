import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk]

const reducers = combineReducers ({
    
})