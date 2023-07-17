// @ts-nocheck
import React, { useEffect, useState } from "react";
import { getCommentsByPostId } from "../../api";
import CommentsList from "./CommentsList";

function CommentListContainer(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const result = await getCommentsByPostId(props.postId);
    setComments([...result]);
  };
  return <CommentsList data={comments} />;
}

export default CommentListContainer;
