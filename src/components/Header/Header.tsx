"use client";

import style from "./style.module.scss";
import { Home, Folder, Shuffle } from "lucide-react";
import Link from "next/link";
import { usePostRandom } from "../../../hook/usePost";
import { use, useEffect, useState } from "react";

export default function Header() {
  const [reload, setreload] = useState(false);
  const { data, error } = usePostRandom();

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
        <Link href="/login">
          {" "}
          <span>Sign In</span>
        </Link>
      </div>
    </header>
  );
}
