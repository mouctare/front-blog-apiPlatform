import {
  COMMENT_ADDED,
  COMMENT_LIST_ERROR,
  COMMENT_LIST_RECEIVED,
  COMMENT_LIST_REQUEST,
} from "../actions/constants";

const initialState = {
  comments: null,
  isFetching: false,
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case COMMENT_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case COMMENT_LIST_RECEIVED:
      return {
        ...state,
        comments: action.data["hydra:member"],
        isFetching: false,
      };
      case COMMENT_ADDED:
        return {
           ...state,
           comments: [action.content, ...state.comments]
        }

    case COMMENT_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        comments: [],
      };

    default:
      return state;
  }
}
