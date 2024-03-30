import { Post } from "@prisma/client";
import { useQuery } from "react-query";
import axios from "axios";

export function usePost(id: string) {
  return useQuery<Post, Error>(
    ["post", id],
    async () => {
      const { data } = await axios.get(`/api/post/${id}`);
      return data;
    },
    {
      enabled: !!id,
    }
  );
}
