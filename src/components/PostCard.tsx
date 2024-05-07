import React from "react";

const PostCard = (props: { title: string; body: string }) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.body}</h1>
    </div>
  );
};

export default PostCard;
