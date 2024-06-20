export interface IApiResponseBase {
  code: number;
  message: string;
}

export interface IApiResponseObject<T> extends IApiResponseBase {
  data: T;
}

export interface IApiResponseArray<T> extends IApiResponseBase {
  data: T[];
}

export interface IApiResponsePagination<T> extends IApiResponseBase {
  data: {
    results: T[];
    info: {
      count: number;
      pages: number;
      next: string;
      prev: string;
    };
  };
}
