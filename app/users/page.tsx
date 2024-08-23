import React from "react";
import PostsTable from "./PostsTable";
import Link from "next/link";

interface Props {
  searchParams : { sortOrder:string}
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  
  return (
    <div className="p-5">
      <Link href={"/users/new"} className="btn m-1">New Users</Link>
      <PostsTable sortOrder={sortOrder}/>
    </div>
  );
};

export default UserPage;
