import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ALargeSmall } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/categories/1"> Category 1 </Link>
      MAIN
      <Button variant="outline">
        <ALargeSmall />
      </Button>
    </main>
  );
}
