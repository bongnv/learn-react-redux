import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './RedditApp';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('reddit actions', () => {
  it('Should create a request action', () => {
    const expectedAction = {
      type: actions.REQUESTS,
    };

    expect(
      actions.requestPosts()
    ).toEqual(expectedAction);
  });

  it('Should create an invalidate action', () => {
    const expectedAction = {
      type: actions.INVALIDATE,
    };

    expect(
      actions.invalidatePosts()
    ).toEqual(expectedAction);
  });

  it('Should create a receive action with responses', () => {
    const posts = [
      {
        title: 'Test title',
      }
    ];

    const expectedAction = {
      type: actions.RECEIVE,
      posts: posts,
    };

    expect(
      actions.receivePosts(posts)
    ).toEqual(expectedAction);
  });
});

describe('reddit async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  });

  const subReddit = 'dota2';
  const responses = { todos: ['do something'] };

  it('creates RECEIVE when fetching todos has been done', () => {
    nock('https://www.reddit.com/')
      .get(`/r/${subReddit}.json`)
      .reply(200, { body: responses});

    const initialState = {
      isFetching: false,
      didInvalidate: false,
      items: [
      ],
    };
    
    const expectedActions = [
      {
        type: actions.REQUESTS,
      },
      {
        type: actions.RECEIVE,
        posts: responses,
      }
    ];

    const store = mockStore(initialState);

    store.dispatch(actions.fetchPostsIfNeeded(subReddit))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});