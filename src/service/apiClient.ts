import axios, { AxiosRequestConfig } from "axios";
import { currentConfig } from '../../config';

const endpoint = currentConfig.apiEnvEndpoint;

export interface FetchResponse<T> {
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