// userData.ts
import { useEffect, useState } from "react";
import ApiClient, { FetchResponse } from "../service/apiClient";
import { AxiosError, AxiosRequestConfig } from "axios"; // Update this line


const userData = <T>(
  endpoint: string,
  options?: AxiosRequestConfig
) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    const apiClient = new ApiClient<T>(endpoint);

    apiClient
      .getAll(options)
      .then((response: FetchResponse<T>) => {
        setData(response.results);
        setIsLoading(false);
      })
      .catch((error: AxiosError) => {
        if (error.message === "AbortError") {
          console.log("Request aborted:", error.message);
        } else {
          setError(error.message);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, [endpoint, options]);

  return { data, error, isLoading };
};

export default userData;
