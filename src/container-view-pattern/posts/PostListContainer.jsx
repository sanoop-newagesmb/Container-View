// @ts-nocheck
import React, { useEffect, useState } from "react";
import { getPosts } from "../../api";
import "./Posts.css";
import PostList from "./PostList";

function PostListContainer() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const result = await getPosts();
    setPost([...result]);
  };
  return <PostList posts={posts} />;
}

export default PostListContainer;
