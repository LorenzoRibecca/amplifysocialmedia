import _ from 'lodash';
import {
    CREATE_COMMENT,
    FETCH_COMMENTS,
    FETCH_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT
} from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_COMMENT:
            return { ...state, [action.payload.id]: action.payload };
        case FETCH_COMMENTS:
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_COMMENT:
            return { ...state, [action.payload.id]: action.payload };    
        case EDIT_COMMENT:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_COMMENT:
            return _.omit(state, action.payload)
        default:
            return state;
    }
};