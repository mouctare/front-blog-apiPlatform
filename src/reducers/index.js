import { combineReducers } from "redux";
import postReducer from "./post.reducer";
import postIdReducer from "./postId.reducer";
import commentReducer from "./commentList.reducer";
import userAuthReducer from "./auth.reducer";

export default combineReducers({
  postReducer,
  postIdReducer,
  commentReducer,
  userAuthReducer,
  

});
