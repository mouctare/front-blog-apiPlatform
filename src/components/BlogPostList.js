import React from "react";

export const BlogPostList = ({ posts, isFetching }) => {
  if (isFetching) {
    return (
      <div>
        <i className="fas fa-spinner fa-spin" />
      </div>
    );
  }

  return (
    <div>
      <ul>
        {posts &&
          posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default BlogPostList;
