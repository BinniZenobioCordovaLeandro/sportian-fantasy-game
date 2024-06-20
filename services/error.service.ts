export const interceptorsRequestError = async (request: any) => {
  if (request.status >= 300) {
    throw await request.json();
  } else {
    return request;
  }
};