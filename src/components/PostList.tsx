import React from "react";
import PostCard from "./PostCard";
import { PostProps } from "../types";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/post");

  if (!res.ok) {
    throw new Error("failled to fetch data!!");
  }

  return res.json();
}

const PostList = async () => {
  const data: PostProps [] = await getData();
  return (
    <div className="postList">
      {/* Postlist
      <PostCard title="lol" body="lll" /> */}
      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
