import axios, { AxiosRequestConfig } from "axios";
import { currentConfig } from '../../config';
import { Book } from "../types/book";

const endpoint = currentConfig.apiEnvEndpoint;

export interface FetchResponse<T> {
  filter(arg0: (book: import("../types/book").Book) => boolean): Book[];
  map(arg0: (book: any, index: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: endpoint,
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