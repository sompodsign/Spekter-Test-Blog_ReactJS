import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createPost } from '../redux/actions/postActions';
import { POST_CREATE_RESET } from '../redux/constants/postConstants';
import Loader from '../components/Loader';
import Message from '../components/Message';

function CreatePostScreen() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const dispatch = useDispatch();

    const postCreated = useSelector(state => state.postCreate)
    const { loading, success, error, post } = postCreated

    useEffect(() => {
        dispatch({ type: POST_CREATE_RESET })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createPost({ title, body }))
    }

    return (
        <div>
            {success && <Message variant="success">Post Created Successfully. <Link style={{ textDecoration: "none" }} to='/'>Go back to home</Link> </Message>}
            <Container>
                <h1>Create a new post</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            type="text" placeholder="Enter title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="body">
                        <Form.Label>Body</Form.Label>
                        <Form.Control
                            as="textarea"
                            onChange={(e) => setBody(e.target.value)}
                            value={body}
                            style={{ height: '150px' }}
                            placeholder="Enter Description" />
                    </Form.Group>
                    {loading
                        ? <Loader />
                        : error ? <Message variant="danger">{error}</Message>
                            : <Button
                                variant="light" type="submit">
                                Submit
                            </Button>
                    }

                </Form>
            </Container>
        </div>

    )
}

export default CreatePostScreen
