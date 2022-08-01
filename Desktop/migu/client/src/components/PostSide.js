import React from "react";
import Post from "./Post";
import PostShare from "./PostShare";
import "./Postside.css";

const PostSide = () => {
  return (
    <div className="PostSide">
      <PostShare/>
      <Post/>
    </div>
  );
};

export default PostSide;