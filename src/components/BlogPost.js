import React from "react";
import Message from "./Message";
import { dateParser } from "./utils";

const BlogPost = ({ post }) => {
  if (null === post) {
    return <Message message="L'article de blog n'existe pas" />;
  }
  return (
    <div className="card mb-3 mt-3 shadow-sm">
      <div className="card-body">
        <h2>{post.title}</h2>
        <p className="card-text">{post.content}</p>
        <p className="card-text border-top">
          <small className="text-muted">
            {dateParser(post.postedAt)} par&nbsp;
            {post.author?.username}
          </small>
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
