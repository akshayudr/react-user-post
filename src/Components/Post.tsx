import React from "react";

const Post = (props: any) => {
  return (
    <div>
      {props.posts?.map((post: any, index: number) => (
        <>
          <h1>
            {index + 1}: {post.title}
          </h1>
          <p>{post.body}</p>
        </>
      ))}
    </div>
  );
};

export default Post;
