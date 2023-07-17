import React, { Fragment } from "react";
import Header from "../../components/Header";
import Post from "./Post";

function PostList(props) {
  return (
    <Fragment>
      <Header />
      <div className="row">
        {props.posts.map((post, index) => (
          <Post data={post} key={index} />
        ))}
      </div>
    </Fragment>
  );
}

export default PostList;
