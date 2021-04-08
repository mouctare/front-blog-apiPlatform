import React from "react";
import Message from "./Message";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "./CommentList.css";
import { dateParser } from "./utils";

const CommentList = ({ comments }) => {
 // console.log(comments);

  if (null === comments || 0 === comments.length) {
    return <Message message="Pas de  encore de commentaires" />;
  }
  return (
    <div className="card mb-3 mt-3 shadow-sm">
      <TransitionGroup>
      {comments &&
        comments.map((comment) => {
          return (
            <CSSTransition key={comment.id} timeout={1000} classNames="fade">
            <div className="card-body border-bottom" key={comment.id}>
              <p className="card-text mb-0">{comment.content}</p>
              <p className="card-text">
                <small className="text-muted">
                  {dateParser(comment.published)} par&nbsp;
                  {comment.author.username}
                </small>
              </p>
            </div>
            </CSSTransition>
          );
        })}
        </TransitionGroup>
    </div>
  );
};

export default CommentList;
