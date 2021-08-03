import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postDetail, deletePost } from '../redux/actions/postActions';
import {
    Button
} from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';


function PostDetailScreen({ match, history }) {

    const id = match.params.id
    const dispatch = useDispatch();
    const postItem = useSelector(state => state.postDetail)
    const { post, loading, error } = postItem

    const postDelete = useSelector(state => state.deletePost)
    const { 
        loading: deleteLoading,
        success: deleteSuccess,
        error: deleteError } = postDelete


    useEffect(() => {
        dispatch(postDetail(id))
    }, [])

    const deleteHandler = (id) => {
        dispatch(deletePost(id))
    }

    if (deleteSuccess) {
        history.push('/')
    }

    return (
        <div>
            <Button onClick={() => history.push('/')} variant="light"> Back To Home</Button>
            {loading ?
                <Loader />
                : error ? <Message variant="danger">{error}</Message>
                    : (
                        <div className="jumbotron">
                            <h1 className="display-4">{post.title}</h1>
                            <p className="lead">{post.body}</p>
                            <hr className="my-4"></hr>
                            <p className="lead">
                            </p>
                            {deleteLoading ? <Loader />
                                : deleteError
                                    ? <Message variant="danger">{deleteError}</Message>
                                    : <Button onClick={() => deleteHandler(post.id)} variant="danger">Delete</Button>
                            }

                        </div>
                    )
            }

        </div>
    )
}

export default PostDetailScreen
