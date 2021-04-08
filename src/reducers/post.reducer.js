import {
  BLOG_POST_LIST_ADD,
  BLOG_POST_LIST_ERROR,
  BLOG_POST_LIST_RECEIVED,
  BLOG_POST_LIST_REQUEST,
} from "../actions/constants";

const initialState = {
  posts: [],
  isFetching: false,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case BLOG_POST_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case BLOG_POST_LIST_RECEIVED:
      return {
        ...state,
        posts: action.data["hydra:member"],
        isFetching: false,
      };

    case BLOG_POST_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        posts: [],
      };
    case BLOG_POST_LIST_ADD:
      return {
        ...state,
        posts: [...state.posts, ...action.data],
        //state.posts ? state.posts.concat(action.data) : state.posts,
      };
    default:
      return state;
  }
}
