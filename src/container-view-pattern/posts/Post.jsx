import React from "react";
import CommentListContainer from "./CommentListContainer";

function Post(props) {
  return (
    <div className="card">
      <h2>{props.data.title}</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <p>Some text..</p>
      <p>{props.data.body}</p>
      <CommentListContainer postId={props.data.id} />
    </div>
  );
}

export default Post;
