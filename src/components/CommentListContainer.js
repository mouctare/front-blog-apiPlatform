import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentListFetch } from "../actions/actions";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import { Spinner } from "./Spinner";

const CommentListContainer = (props) => {
  const commentList = useSelector((state) => state.commentReducer);
  const isAuthenticated = useSelector((state) => state.userAuthReducer.isAuthenticated);
  const postId = useSelector((state) => state.postIdReducer.post.id);


  const { comments, isFetching} = commentList;

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(commentListFetch(props.postId));
  }, [dispatch, props.postId]);

  if (isFetching) {
    return <Spinner />;
  }

  return(
   
    <div>
    
     <CommentList comments={comments} />
      {isAuthenticated && <CommentForm  postId={postId}/>}
  </div>
  )
};

export default CommentListContainer;
