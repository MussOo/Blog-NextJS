"use client";
import PageTitle from "@/components/PageTitle/page";
import style from "./style.module.scss";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { onlineManager } from "react-query";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  const onLogin = (provider: string) => () => {
    signIn(provider);
  };

  return (
    <div className={style.main}>
      <PageTitle title="Login" />
      <div className={style.container_btn}>
        <Button className={style.btn} onClick={onLogin("github")}>
          <Github size={24} />
          Authentification avec GitHub
        </Button>
        <Button className={style.btn} onClick={onLogin("google")}>
          <Mail size={24} />
          Authentification avec Gmail
        </Button>
      </div>
    </div>
  );
}
