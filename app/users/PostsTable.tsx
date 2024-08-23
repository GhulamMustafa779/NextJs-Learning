import React from "react";
import Link from "next/link";
import {sort} from 'fast-sort';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Props {
  sortOrder: string;
}

const PostsTable = async ({sortOrder}: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const posts: Post[] = await res.json();

  const sortedPosts = sort(posts).asc(sortOrder === 'title' ? user => user.title : user => user.body)


  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th><Link href="/users?sortOrder=title">Title</Link></th>
          <th><Link href="/users?sortOrder=body">Body</Link></th>
        </tr>
      </thead>
      <tbody>
        {sortedPosts.map((post) => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostsTable;
