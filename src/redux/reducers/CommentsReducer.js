import {
  COMMENT_INCREMENT_SUCCESS,
  COMMENT_INCREMENT_FAIL,
} from '../constants/CommentsConstants';

export const commentIncrementReducer = (state = [], action) => {
  switch (action.type) {
    case COMMENT_INCREMENT_SUCCESS:
      state = { ...state, single: action.payload };
      console.log('inc', state.single);
      return { ...state, single: action.payload };
    case COMMENT_INCREMENT_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
