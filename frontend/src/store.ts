import {createStore, combineReducers, applyMiddleware, Middleware,  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  { thunk, ThunkMiddleware } from "redux-thunk"
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";



const reducer = combineReducers ({
    userRegister: userRegisterReducer,
    userSignIn: userLoginReducer,
})
//const middleware = [thunk ];


const userInfoFromStorage = localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')!) : null


    const initialState = {
        userSignIn: { userInfo: userInfoFromStorage }
    }
    const middleware: Middleware[]    = [thunk as unknown as Middleware] 
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))



export default store