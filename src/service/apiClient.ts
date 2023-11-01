import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  map(arg0: (book: any, index: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

export default ApiClient;