import { Category } from "@prisma/client";
import { useQuery } from "react-query";
import axios from "axios";

export function useCategory() {
  return useQuery<Category, Error>(["categories", "all"], async () => {
    const { data } = await axios.get(`/api/categorie`);
    return data;
  });
}

export function useCategoryById(id: string) {
  return useQuery<Category, Error>(
    ["categories", id],
    async () => {
      const { data } = await axios.get(`/api/categorie/${id}`);
      return data;
    },
    {
      enabled: !!id,
    }
  );
}
