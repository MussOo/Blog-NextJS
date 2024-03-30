"use client";
import Image from "next/image";
import { usePost } from "../../../../hook/usePost";
import style from "./style.module.scss";

export default function ShowPostPage({ params }: { params: { id: string } }) {
  const { data, isFetched, isLoading } = usePost(params.id);

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : isFetched ? (
        <div className={style.container_card}>
          <div className={style.container_img}>
            <h1>{data?.title}</h1>
            <div className={style.size_img}>
              <Image
                src={data?.image}
                alt={data?.title}
                width={500}
                height={100}
              />
            </div>
          </div>
          <div className={style.container_add_info}></div>
          <div className={style.line_horizontal}></div>
          <div className={style.container_content}>
            <p className={style.content}>{data?.content}</p>
          </div>
        </div>
      ) : (
        "Error"
      )}
    </div>
  );
}
