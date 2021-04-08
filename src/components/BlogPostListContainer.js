import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { blogPostListFetch } from "../actions/actions";
import BlogPostList from "./BlogPostList";
//import Header from "./Header";
import { Spinner } from "./Spinner";

const BlogPostListContainer = () => {
  const postsList = useSelector((state) => state.postReducer);
  const { posts, isFetching } = postsList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogPostListFetch());
  }, [dispatch]);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div>
      <BlogPostList posts={posts} />
    </div>
  );
};

export default BlogPostListContainer;
