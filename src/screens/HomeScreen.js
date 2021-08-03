import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Loader from '../components/Loader';
import Message from '../components/Message';
import PostCard from '../components/PostCard';
import { listPosts } from '../redux/actions/postActions';
import { POST_DELETE_RESET } from '../redux/constants/postConstants';

function HomeScreen() {

    const dispatch = useDispatch();
    const postList = useSelector(state => state.postList);
    const { loading, posts, error } = postList

    const postDelete = useSelector(state => state.deletePost)
    const { success: deleteSuccess } = postDelete


    useEffect(() => {
        if (posts) {
            dispatch(listPosts())
        }
    }, [dispatch, deleteSuccess])

    if (deleteSuccess) { // to remove the success deletion message after 3 seconds
        setTimeout(function(){ dispatch({type: POST_DELETE_RESET}) }, 3000);
    }

    return (
        <div>
        <Header />
            {deleteSuccess && <Message variant="success">Post Deleted Successfully.</Message>}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ): (
                posts.slice(1,10).map(post => {
                    return (
                        <div className="d-inline-flex" key={post.id}>
                        <PostCard item ={post}/>
                        </div>
                        )
                })
            )}
        </div>
    )
}

export default HomeScreen
