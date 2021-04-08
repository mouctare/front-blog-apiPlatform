import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogPostFetch } from "../actions/actions";
import BlogPost from "./BlogPost";
import CommentListContainer from "./CommentListContainer";
import { Spinner } from "./Spinner";

const BlogPostContainer = ({ match }) => {
  const onePost = useSelector((state) => state.postIdReducer);
  const { post, isFetching } = onePost;

  const dispatch = useDispatch();

  useEffect(() => {
    //console.log(match.params.id);
    dispatch(blogPostFetch(match.params.id));
  }, [dispatch, match.params.id]);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div>
      <BlogPost post={post} />
      {/*  Pour éviter qu'il face des requetes unititles , on lui demande de charger les posts qui des commentaires */}
      {post && <CommentListContainer postId={match.params.id} />}
    </div>
  );
};

export default BlogPostContainer;
