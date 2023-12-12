interface Config {
    apiEnvEndpoint: string;
}

const config: Record<string, Config> = {
    development: {
        apiEnvEndpoint: "http://localhost:3000" ,
    },
    production: {
        apiEnvEndpoint: "https://your-production-api.com",
    },
};

export const currentConfig: Config = config[import.meta.env.MODE || 'development'];
