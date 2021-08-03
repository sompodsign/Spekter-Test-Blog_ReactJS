import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
    postListReducer,
    postDetailReducer,
    postDeleteReducer,
    postCreateReducer
} from './redux/reducers/postReducers'


const reducer = combineReducers({
    postList: postListReducer,
    postDetail: postDetailReducer,
    deletePost: postDeleteReducer,
    postCreate: postCreateReducer,
})

// const postItemsFromStorage = localStorage.getItem("postItems")
//   ? JSON.parse(localStorage.getItem("postItems"))
//   : [];

// const initialState = {
//     cart: {
//       cartItems: postItemsFromStorage,
//     }
//   };

const middleware = [thunk]

const store = createStore(
    reducer,
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;