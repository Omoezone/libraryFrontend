import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

const userData = <T> (
    endpoint: string,
    options?: AxiosRequestConfig) => {
    
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        apiClient(endpoint, {
            signal: controller.signal,
            ...options,
        }).then((response) => {
            setData(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            if (!(error instanceof CanceledError)) setError(error.message);
        });
        return () => controller.abort();
        
    }, [endpoint, options]);

    return { data, error };
};

export default userData;