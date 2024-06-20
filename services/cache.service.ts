import { IHttpParams } from "./http.service";

export const responseCache = new Map();

export const generateCacheKey = (url: string, params?: IHttpParams) => {
  return `${url}-${JSON.stringify(params)}`;
};

// TODO: Implement cache Time To Live (TTL) for expired cache
