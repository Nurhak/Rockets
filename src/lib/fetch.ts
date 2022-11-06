import axios from 'axios';
import Logger from './logger';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 1000 * 60 * 1,
  transformResponse: [
    (res) => {
      try {
        return JSON.parse(res);
      } catch (e) {
        return res;
      }
    },
  ],
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Logger.error(error);
    return Promise.reject(error);
  }
);

export const getReq = async <T>(url: string, params?: unknown): Promise<T> => {
  return (await axiosInstance.get(url, { params }))?.data;
};

export const postReq = async <T>(
  url: string,
  data?: unknown,
  params?: unknown
): Promise<T> => {
  return (await axiosInstance.post(url, data, { params }))?.data;
};

export const putReq = async <T>(
  url: string,
  data?: unknown,
  params?: unknown
): Promise<T> => {
  return (await axiosInstance.put(url, data, { params }))?.data;
};

export const deleteReq = async (
  url: string,
  params?: unknown
): Promise<void> => {
  return (await axiosInstance.delete(url, { params }))?.data;
};

export default axiosInstance;
