import React from "react";
import store from "../Store/Store";
import Post from "./Post";
import { observer } from "mobx-react-lite";

const Posts = () => {
  const { posts } = store;
  return (
    <div>
      <Post posts={posts} />
    </div>
  );
};

export default observer(Posts);
