import posts from '../apis/posts';
import comments from '../apis/comments'
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_POST,
    FETCH_POSTS,
    FETCH_POST,
    DELETE_POST,
    EDIT_POST,
    CREATE_COMMENT,
    FETCH_COMMENTS,
    FETCH_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT
} from './types'

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
}

export const signOut = () => {
    return { 
        type: SIGN_OUT
    };
}

export const createPost = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await posts.post('/posts', {...formValues, userId, comments});

    dispatch({ type: CREATE_POST, payload: response.data });
    history.push('/');
};

export const fetchPosts = () => async dispatch => {
    const response = await posts.get('/posts');

    dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPost = (id) => async dispatch => {
    const response = await posts.get(`/posts/${id}`);

    dispatch({ type: FETCH_POST, payload: response.data });
};

export const editPost = (id, formValues) => async dispatch => {
    const response = await posts.patch(`/posts/${id}`, formValues);

    dispatch({ type: EDIT_POST, payload: response.data });
    history.push('/');
};

export const deletePost = (id) => async dispatch => {
    await posts.delete(`/posts/${id}`);
    
    dispatch({ type: DELETE_POST, payload: id });
    history.push('/');
}

export const createComment = (path, formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await comments.post(`/comments`, {...formValues, userId, path});

    dispatch({ type: CREATE_COMMENT, payload: response.data });
    history.push('/');
};

export const fetchComments = () => async dispatch => {
    const response = await comments.get('/comments');

    dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

export const fetchComment = (id) => async dispatch => {
    const response = await comments.get(`/comments/${id}`);

    dispatch({ type: FETCH_COMMENT, payload: response.data });
};

export const editComment = (id, formValues) => async dispatch => {
    const response = await comments.patch(`/comments/${id}`, formValues);

    dispatch({ type: EDIT_COMMENT, payload: response.data });
    history.push('/');
};

export const deleteComment = (id) => async dispatch => {
    await comments.delete(`/comments/${id}`);
    
    dispatch({ type: DELETE_COMMENT, payload: id });
    history.push('/');
}
