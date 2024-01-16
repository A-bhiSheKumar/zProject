// Post.tsx

import React from "react";

interface PostProps {
  post: { id: number; title: string; body: string };
  index: number; // Add the index prop
}

const Post: React.FC<PostProps> = ({ post, index }) => {
  return (
    <div className={`bg-${index % 2 === 0 ? "gray" : "blue"}-200 p-2 rounded mb-2`}>
      <h3 className="text-lg font-bold">{post.title}</h3>
      {/* <p>{post.body}</p> */}
    </div>
  );
};

export default Post;
