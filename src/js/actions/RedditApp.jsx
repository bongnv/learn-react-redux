import fetch from 'isomorphic-fetch';

export const INVALIDATE = 'INVALIDATE';
export const REQUESTS = 'REQUESTS';
export const RECEIVE = 'RECEIVE';
export const ERROR = 'ERROR';

export const requestPosts = () => ({
  type: REQUESTS,
});

export const invalidatePosts = () => ({
  type: INVALIDATE,
});

export const receivePosts = (posts) => ({
  type: RECEIVE,
  posts: posts,
});

// async actions
export const fetchPostsIfNeeded = (subReddit) => {
  return (dispatch, getState) => {
    const state = getState();
    if (!state.isFetching) {
      dispatch(requestPosts());
      return fetch(`https://www.reddit.com/r/${subReddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json.body)));
    } else {
      return Promise.resolve();
    }
  };
};