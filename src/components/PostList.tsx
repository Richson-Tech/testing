import React from "react";
import PostCard from "./PostCard";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/post");

  if (!res.ok) {
    throw new Error("failled to fetch data!!");
  }

  return res.json();
}

const PostList = async () => {
  const data = await getData();
  return (
    <div className="postList">
      Postlist
      <PostCard title="lol" body="lll" />
    </div>
  );
};

export default PostList;
