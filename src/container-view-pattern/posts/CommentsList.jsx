import React from "react";
import Comment from "./Comment";

function CommentsList({ data }) {
  return (
    <>
      <h4>Comments</h4>
      <div className="row">
        {data.map((comment, index) => (
          <Comment data={comment} key={index} index={index} />
        ))}
      </div>
    </>
  );
}

export default CommentsList;
