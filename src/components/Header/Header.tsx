"use client";

import style from "./style.module.scss";
import { Home, Folder, Shuffle } from "lucide-react";
import Link from "next/link";
import { usePostRandom } from "../../../hook/usePost";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Header() {
  const [reload, setreload] = useState(false);
  const { data, error } = usePostRandom();
  const { data: session, status } = useSession();

  return (
    <header className={style.header}>
      <h1>Header</h1>
      <div className={style.container_nav_items}>
        <ul>
          <li>
            <Link href="/">
              {" "}
              <Home /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              {" "}
              <Folder /> <span>Category</span>
            </Link>
          </li>
          <li>
            <Link
              href={`/post/${data?.id}`}
              onClick={() => {
                setreload(!reload);
              }}
            >
              {" "}
              <Shuffle /> <span>Random</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.container_btn_authentification}>
        {session ? (
          <Link href="/api/auth/signout">
            {" "}
            <span>Sign Out</span>
          </Link>
        ) : (
          <Link href="/login">
            {" "}
            <span>Sign In</span>
          </Link>
        )}
      </div>
    </header>
  );
}
