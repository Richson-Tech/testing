import React from "react";
import { PostProps } from "../types";

const PostCard = (props: PostProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.body}</h1>
    </div>
  );
};

export default PostCard;
