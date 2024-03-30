"use client";

import style from "./style.module.scss";
import { Home, Folder, Shuffle } from "lucide-react";
import Link from "next/link";

export default function Header() {
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
            <Link href="/random">
              {" "}
              <Shuffle /> <span>Random</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.container_btn_authentification}>
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
    </header>
  );
}
