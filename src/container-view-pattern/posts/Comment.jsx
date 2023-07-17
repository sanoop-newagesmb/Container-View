import React from "react";

function Comment({ data, index }) {
  return (
    <p>
      {index + 1}. <i>{data.body}</i>
    </p>
  );
}

export default Comment;
