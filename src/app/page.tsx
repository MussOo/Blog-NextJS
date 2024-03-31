"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ALargeSmall } from "lucide-react";
import Link from "next/link";
import MainComponent from "@/components/Accueil/Main/page";
import { useSession } from "next-auth/react";
import PageTitle from "@/components/PageTitle/page";
import style from "./style.module.scss";
import { usePosts } from "../../hook/usePost";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState({ order: "desc", sort: "nbViews" });

  const { data: session } = useSession();
  const { data, status } = usePosts(filter);

  console.log(data);
  let getMessageHome = () => {
    if (session) {
      return `Welcome ${session?.user?.name}`;
    }
    return "Welcome";
  };
  return (
    <main className={style.main}>
      <PageTitle title={getMessageHome()} />

      <div className={style.container_posts_famous}>
        <h2>Les 3 articles les plus vue</h2>
        <div className={style.container_items}>
          {data?.map((post) => (
            <div key={post.id} className={style.item}>
              <h3>{post.title}</h3>
              <p>nombres de vue : {post.nbViews}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
