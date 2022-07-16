import {
  COMMENT_INCREMENT_SUCCESS,
  COMMENT_INCREMENT_FAIL,
} from '../constants/CommentsConstants';

export const incrementComment = (username) => (dispatch, getState) => {
  const {
    postList: { posts },
  } = getState();

  if (posts) {
    let postExists = false;
    posts.map((post) => {
      const newPost = { ...post };
      if (newPost.username === username) {
        postExists = true;
        newPost.comments = post.comments + 1;
        dispatch({ type: COMMENT_INCREMENT_SUCCESS, payload: newPost });
      }
      return newPost;
    });

    if (!postExists)
      dispatch({
        type: COMMENT_INCREMENT_FAIL,
        incrementError: 'Post does not exist',
      });
  }
};
