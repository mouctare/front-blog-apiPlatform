import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { blogPostListFetch } from "../actions/actions";
import BlogPostList from "./BlogPostList";
import Header from "./Header";

const BlogPostListContainer = () => {
  const postsList = useSelector((state) => state.postReducer);
  const { posts, isFetching } = postsList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(blogPostListFetch());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <BlogPostList posts={posts} isFetching={isFetching} />
    </div>
  );
};

export default BlogPostListContainer;
