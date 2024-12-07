import { api } from "../lib/axios-config";

export const fetchData = async (query: string) => {
  const response = await api.post("", {
    query,
  });

  return response.data.data;
};
