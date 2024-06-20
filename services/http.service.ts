import { configuration } from "@/util/configuration.util";
import { Platform } from "react-native";
import { interceptorsRequestError } from "./error.service";
import { generateCacheKey, responseCache } from "./cache.service";

const defaultHeaders = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
});

export interface IHttpParams {
  [key: string]: {
    [key: string]: string;
  };
}

interface HttpService {
  get: <T>(url: string, params?: IHttpParams, withAuth?: boolean) => Promise<T>;
  post: <T>(url: string, body: any, params?: IHttpParams) => Promise<T>;
}

export const http: HttpService = {
  get: async <T>(url: string, params?: IHttpParams): Promise<T> => {
    const cacheKey = generateCacheKey(url, params);
    if (responseCache.has(cacheKey)) {
      return Promise.resolve(responseCache.get(cacheKey));
    }
    
    return new Promise((resolve, reject) => {
      fetch(configuration.API_BASE() + url, {
        ...params,
        method: "GET",
        headers: {
          ...defaultHeaders(),
          ...(Platform.OS !== "ios" && { "Cache-Control": "no-cache" }),
          ...params?.headers,
        } as HeadersInit_,
      })
        .then((response) => interceptorsRequestError(response))
        .then(async (response) => {
          if (response !== undefined) {
            const responseToJson = await response.json();
            resolve(<T>responseToJson);
          }
        })
        .catch(async (error) => {
          const errorObject = await interceptorsRequestError(error);
          reject(errorObject);
        });
    });
  },
  post: async <T>(url: string, body: any, params?: IHttpParams): Promise<T> => {
    return new Promise((resolve, reject) => {
      fetch(configuration.API_BASE() + url, {
        ...params,
        method: "POST",
        headers: {
          ...defaultHeaders(),
          ...(Platform.OS !== "ios" && { "Cache-Control": "no-cache" }),
          ...params?.headers,
        } as HeadersInit_,
        body: JSON.stringify(body),
      })
        .then((response) => interceptorsRequestError(response))
        .then(async (response) => {
          if (response !== undefined) {
            const responseToJson = await response.json();
            resolve(<T>responseToJson);
          }
        })
        .catch(async (error) => {
          const errorObject = await interceptorsRequestError(error);
          reject(errorObject);
        });
    });
  },
};
