import axios from 'axios';
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

    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
} from "../constants/postConstants";

//action to load posts from server
export const listPosts = () => async (dispatch) => {
    console.log('get list executed')
    try {
        dispatch({ type: POST_LIST_REQUEST });

        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');

        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: POST_LIST_FAIL,
            payload: error
        });
    }
};

//action to pull post detail based on post id
export const postDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: POST_DETAIL_REQUEST });

        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        dispatch({
            type: POST_DETAIL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: POST_DETAIL_FAIL,
            payload: error
        });
    }
};

//action to create a post
export const createPost = (post) => async (dispatch) => {
    console.log(post)
    try {
        dispatch({ type: POST_CREATE_REQUEST });

        const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts/', post);

        dispatch({
            type: POST_CREATE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: POST_CREATE_FAIL,
            payload: error
        });
    }
};

//action to delete a post by id
export const deletePost = (id) => async (dispatch) => {
    try {
        dispatch({ type: POST_DELETE_REQUEST });

        const { data } = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

        dispatch({
            type: POST_DELETE_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: POST_DELETE_FAIL,
            payload: error
        });
    }
};
