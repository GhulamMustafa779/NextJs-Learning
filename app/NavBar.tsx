"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex p-5 bg-slate-100 space-x-5">
      <Link href={"/"} className="text-slate-900 hover:scale-105 mr-5">
        Next.js
      </Link>
      <Link href={"/users"} className="text-slate-800 hover:scale-105 mr-5">
        Users
      </Link>
      {status === "authenticated" && (
        <div>  
          {session.user!.name}
          <Link
            href={"/api/auth/signout"}
            className="text-slate-800 hover:scale-105 mx-5"
          >
            Sign out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link
          href={"/api/auth/signin"}
          className="text-slate-800 hover:scale-105 mr-5"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
