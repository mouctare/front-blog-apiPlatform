import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
//import timeago from "timeago.js";
import { dateParser } from "./utils";

export const BlogPostList = ({ posts }) => {
  if (null === posts || 0 === posts.length) {
    return <Message message="Aucun article de blog" />;
  }
  return (
    <div>
      {posts &&
        posts.map((post) => {
          return (
            <div className="card mb-3 mt-3 shadow-sm" key={post.id}>
              <div className="card-body">
                <h3>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="card-text border-top">
                  <small className="text-muted">
                    {/*   {timeago().format(post.postedAt)} */}
                    {dateParser(post.postedAt)}
                  </small>
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BlogPostList;
