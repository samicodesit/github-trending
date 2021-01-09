import { useState, useEffect } from "react";
import { QueryParams, ResponseInterface } from "../utils/types";
import { API_URL } from "../utils/constants";

export async function $fetch(params: QueryParams) {
  const queryString = `?${new URLSearchParams(Object.entries(params))}`;

  const response = await fetch(API_URL + queryString);
  if (response.status !== 200) throw new Error("Server error.");

  return response.json();
}

const useFetch = (initialParams: QueryParams) => {
  const [response, setResponse] = useState<ResponseInterface | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [params, updateParams] = useState(initialParams);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await $fetch(params);
        setResponse(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return { response, isLoading, error, updateParams };
};

export default useFetch;
