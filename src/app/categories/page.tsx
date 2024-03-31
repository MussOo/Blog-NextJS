"use client";
import PageTitle from "@/components/PageTitle/page";
import { useCategory } from "../../../hook/useCategories";
import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Category } from "@prisma/client";

export default function categoriesPages() {
  const { data, isFetched, isLoading } = useCategory();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PageTitle title="Categories" />
      <div className={style.container_items_category}>
        {isFetched &&
          data?.map((category: Category) => (
            <Link
              href={`/categories/${category?.id}`}
              className={style.container_item}
              key={category.id}
            >
              {category.image ? (
                <Image
                  src={category.image}
                  alt={category.title}
                  width={100}
                  height={100}
                />
              ) : (
                <Image
                  src="https://media.istockphoto.com/id/1354776457/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=w3OW0wX3LyiFRuDHo9A32Q0IUMtD4yjXEvQlqyYk9O4="
                  alt={category.title}
                  width={100}
                  height={100}
                />
              )}

              <h4>{category.title}</h4>
            </Link>
          ))}
      </div>
    </div>
  );
}
