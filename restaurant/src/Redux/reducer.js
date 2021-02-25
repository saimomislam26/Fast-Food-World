import DISHES from '../Component/data/dishes';
import COMMENTS from '../Component/data/comments';
import { combineReducers } from 'redux'

const dishReducer = (dishState = DISHES, action) => {
    return dishState;
}

const commentReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            let comment = action.payload;
            comment.id = commentState.length;
            comment.date = new Date().toDateString();
            return commentState.concat(comment)

        default:
            return commentState;
    }

}
export const reducer = combineReducers({
    dish: dishReducer,
    comments: commentReducer
})