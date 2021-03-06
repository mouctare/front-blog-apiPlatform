import {
  BLOG_POST_ERROR,
  BLOG_POST_RECEIVED,
  BLOG_POST_REQUEST,
} from "../actions/constants";

const initialState = {
  post: null,
  isFetching: false,
};

export default function postIdReducer(state = initialState, action) {
  switch (action.type) {
    case BLOG_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case BLOG_POST_RECEIVED:
      return {
        ...state,
        post: action.data,
        isFetching: false,
      };
    case BLOG_POST_ERROR:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
