import {
  POSTS_LIST_SUCCESS,
  POSTS_LIST_FAIL,
} from '../constants/PostsConstants.js';

let compare = (current, other) => {
  // Get the inputs  type
  let currentType = Object.prototype.toString.call(current);

  // Get the other type
  let otherType = Object.prototype.toString.call(other);

  // If items are not an object or array, return false
  if (
    ['[object Array]', '[object Object]'].indexOf(currentType) < 0 ||
    ['[object Array]', '[object Object]'].indexOf(otherType) < 0
  )
    return false;

  // If the two inputs are not the same type, return false
  if (currentType !== otherType) return false;

  // Compare the length of the length of the two items
  let currentLen =
    currentType === '[object Array]'
      ? current.length
      : Object.keys(current).length;
  let otherLen =
    otherType === '[object Array]' ? other.length : Object.keys(other).length;
  if (currentLen !== otherLen) return false;

  //Helper function to check the equality
  let equal = (item1, item2) => {
    // Get the object type
    let itemType = Object.prototype.toString.call(item1);

    // If an object or array, compare recursively
    if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!compare(item1, item2)) return false;
    } else {
      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) return false;

      // If it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === '[object Function]') {
        if (item1.toString() !== item2.toString()) return false;
      } else {
        if (item1 !== item2) return false;
      }
    }
  };

  // Compare properties
  if (currentType === '[object Array]') {
    for (var i = 0; i < currentLen; i++) {
      // Compare the item
      if (equal(current[i], other[i]) === false) return false;
    }
  } else {
    for (var key in current) {
      if (current.hasOwnProperty(key)) {
        // Compare the item
        if (equal(current[key], other[key]) === false) return false;
      }
    }
  }

  //If all tests are passed then
  return true;
};

export const listPosts = (update, username) => (dispatch, getState) => {
  console.log('update', update);
  const {
    postList: { posts },
  } = getState();

  let newPosts = posts;

  if (update) {
    newPosts.map((post) => {
      if (post.username === username) {
        post = update;
        console.log('edittt', post);
      }
    });

    console.log('shhssh', newPosts);
  }

  dispatch({
    type: POSTS_LIST_SUCCESS,
    payload: newPosts,
  });

  // let newPosts = null;

  // if (newPosts) {
  //   if (compare(posts, newPosts)) {
  //     console.log('same');
  //     dispatch({
  //       type: POSTS_LIST_SUCCESS,
  //       payload: posts,
  //     });
  //   } else {
  //     console.log('NO same');
  //     console.log('new', newPosts);
  //     dispatch({
  //       type: POSTS_LIST_SUCCESS,
  //       payload: newPosts,
  //     });
  //   }
  // } else {
  //   console.log('nonexiste');
  //   dispatch({
  //     type: POSTS_LIST_SUCCESS,
  //     payload: posts,
  //   });
  // }
};
