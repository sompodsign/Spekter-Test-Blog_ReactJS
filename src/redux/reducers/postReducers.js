import {
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAIL,

    POST_DETAIL_REQUEST,
    POST_DETAIL_SUCCESS,
    POST_DETAIL_FAIL,

    POST_DELETE_REQUEST,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAIL,
    POST_DELETE_RESET,

    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
    POST_CREATE_RESET,

} from "../constants/postConstants";

//post list reducer
export const postListReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case POST_LIST_REQUEST:
            return { loading: true, products: [] };

        case POST_LIST_SUCCESS:
            return {
                loading: false,
                posts: action.payload,
            };

        case POST_LIST_FAIL:
            return {
                loading: false, error: action.payload
            };

        default:
            return state;

    }
};

//post detail reducer
export const postDetailReducer = (state = { post: {} }, action) => {
    switch (action.type) {
        case POST_DETAIL_REQUEST:
            return { loading: true, products: [] };

        case POST_DETAIL_SUCCESS:
            return {
                loading: false,
                post: action.payload,
            };

        case POST_DETAIL_FAIL:
            return {
                loading: false, error: action.payload
            };

        default:
            return state;

    }
};

//post delete reducer
export const postDeleteReducer = (state = { post: {} }, action) => {
    switch (action.type) {
        case POST_DELETE_REQUEST:
            return { loading: true }

        case POST_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            };

        case POST_DELETE_FAIL:
            return {
                loading: false, error: action.payload
            };

        case POST_DELETE_RESET:
            return {}

        default:
            return state;

    }
};

//post create reducer
export const postCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_CREATE_REQUEST:
            return { loading: true, }

        case POST_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                post: action.payload
            };

        case POST_CREATE_FAIL:
            return {
                loading: false, error: action.payload
            };

        case POST_CREATE_RESET:
            return {};

        default:
            return state;

    }
};

