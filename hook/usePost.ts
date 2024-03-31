import { Post } from "@prisma/client";
import { useQuery } from "react-query";
import axios from "axios";

export function usePosts(filter: {
  order?: string;
  sort: string;
  limit?: number;
}) {
  return useQuery<Post[], Error>(
    "posts",
    async () => {
      let params = "";
      if (filter.order) {
        params += `?order=${filter.order}`;
        params += `&sort=${filter.sort}`;
      }
      if (filter.limit) {
        params += params ? `&` : "?";
        params += `limit=${filter.limit}`;
      }

      const { data } = await axios.get("/api/post" + params);
      return data;
    },
    {
      enabled: true,
    }
  );
}

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

export function usePostsByCategory(id: string) {
  return useQuery<Post[], Error>(
    ["posts", id],
    async () => {
      const { data } = await axios.get(`/api/categorie/${id}/posts`);
      return data;
    },
    {
      enabled: !!id,
    }
  );
}

export function usePostRandom() {
  return useQuery<Post, Error>(
    "postRandom",
    async () => {
      const { data } = await axios.get(`/api/post/random`);
      return data;
    },
    {
      enabled: true,
    }
  );
}
