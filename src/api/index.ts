import axios, {
	AxiosInstance,
	InternalAxiosRequestConfig,
	AxiosResponse,
	AxiosError,
} from "axios";

const instance: AxiosInstance = axios.create();

instance.interceptors.request.use(
	(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
		return config;
	},
	(error: AxiosError): Promise<AxiosError> => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(response: AxiosResponse): AxiosResponse => {
		return response;
	},
	(error: AxiosError): Promise<AxiosError> => {
		if (error.response?.status === 401) {
			window.location.href = "/login";
		}

		return Promise.reject(error);
	}
);

export const $http = instance;
