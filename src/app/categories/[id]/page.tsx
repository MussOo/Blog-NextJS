"use client";
import PageTitle from "@/components/PageTitle/page";
import style from "./style.module.scss";
import { usePostsByCategory } from "../../../../hook/usePost";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};
export default function ShowCategory({ params }: Props) {
  const { id } = params;
  const { data, isFetched, isLoading } = usePostsByCategory(id);

  console.log(data);

  return (
    <div className={style.main}>
      {isFetched &&
        data?.map((post) => (
          <Link
            href={`/post/${post?.id}`}
            className={style.container_item}
            key={post.id}
          >
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                width={100}
                height={100}
              />
            ) : (
              <Image
                src="https://media.istockphoto.com/id/1354776457/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=w3OW0wX3LyiFRuDHo9A32Q0IUMtD4yjXEvQlqyYk9O4="
                alt={post.title}
                width={100}
                height={100}
              />
            )}

            <h4>{post.title}</h4>
          </Link>
        ))}
    </div>
  );
}
