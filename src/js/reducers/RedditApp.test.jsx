import redditAppReducer from './RedditApp';
import * as ActionTypes from '../actions/RedditApp';

describe('reddit reducer', () => {
  it('Should return the initial state', () => {
    expect(
      redditAppReducer(undefined, {})
    ).toEqual({
      isFetching: false,
      didInvalidate: false,
      items: [
      ],
    });
  });

  it('Should invalidate', () => {
    const beforeState = {
      isFetching: false,
      didInvalidate: false,
      items: [
      ],
    };

    const afterState = {
      isFetching: false,
      didInvalidate: true,
      items: [
      ],
    };

    expect(
      redditAppReducer(beforeState, {
        type: ActionTypes.INVALIDATE,
      })
    ).toEqual(afterState);
  });

  it('Should be fetching data from server', () => {
    const beforeState = {
      isFetching: false,
      didInvalidate: true,
      items: [
      ],
    };

    const afterState = {
      isFetching: true,
      didInvalidate: false,
      items: [
      ]
    };

    expect(
      redditAppReducer(beforeState, {
        type: ActionTypes.REQUESTS,
      })
    ).toEqual(afterState);
  });

  it('Should finished fetching data from server', () => {
    const beforeState = {
      isFetching: true,
      didInvalidate: true,
      items: [
      ]
    };

    const posts = [
      {
        title: 'A testing title'
      }
    ];

    const afterState = {
      isFetching: false,
      didInvalidate: false,
      items: posts,
    };

    expect(
      redditAppReducer(beforeState, {
        type: ActionTypes.RECEIVE,
        posts: posts,
      })
    ).toEqual(afterState);
  });
});