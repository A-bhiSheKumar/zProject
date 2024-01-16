import React from "react";
import Post from "./Post";

interface ListPageProps {
  searchResults: Array<{ id: number; title: string; body: string }>;
}

const ListPage: React.FC<ListPageProps> = ({ searchResults }) => {
  const results = searchResults.map((post, index) => (
    <Post key={post.id} post={post} index={index} />
  ));

  const content = results?.length ? (
    <ul className="list-disc list-inside">
      {results.map((result, index) => (
        <li
          key={index}
          className={`bg-${index % 2 === 0 ? "gray" : "blue"}-200 p-2 rounded`}
        >
          {result}
        </li>
      ))}
    </ul>
  ) : (
    <article className="text-center">
      <p>No Matching Posts</p>
    </article>
  );

  return <main className="my-4">{content}</main>;
};

export default ListPage;

