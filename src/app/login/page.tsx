import PageTitle from "@/components/PageTitle/page";
import style from "./style.module.scss";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className={style.main}>
      <PageTitle title="Login" />
      <div className={style.container_btn}>
        <Button className={style.btn}>
          <Github size={24} />
          Authentification avec GitHub
        </Button>
        <Button className={style.btn}>
          <Mail />
          Authentification avec Google
        </Button>
      </div>
    </div>
  );
}
