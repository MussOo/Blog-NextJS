import React from "react";
import style from "./style.module.scss";
export default function PageTitle({ title }: { title: string }) {
  return <h2 className={style.title}>{title}</h2>;
}
