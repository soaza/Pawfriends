export const MAIN_URL = `http://localhost:3000`;

interface IRequest {
  endpoint: string;
  headers?: Record<string, unknown>;
  params?: Record<string, unknown>;
  data?: Record<string, unknown>;
}

async function makeRequest(request: IRequest, method: string) {
  let url = `${MAIN_URL}/${request.endpoint}`;

  //   if (request.params) {
  //     Object.keys(request.params).forEach((param, ind) => {
  //       url += `${ind === 0 ? "?" : "&"}${param}=${request.params[param]}`;
  //     });
  //   }

  const headers = {
    "Content-Type": "application/json",
    ...request.headers,
  } as unknown as Headers;

  try {
    return fetch(url, {
      method: method,
      headers: headers,
      body: request.data ? JSON.stringify(request.data) : null,
    }).then((res) => {
      if (res.ok) return res.json();
      else throw Error;
    });
  } catch (e) {
    console.log(e);
  }
}

async function get<T>(request: IRequest): Promise<T> {
  return await makeRequest(request, "GET");
}

async function patch<T>(request: IRequest): Promise<T> {
  return await makeRequest(request, "PATCH");
}

async function post<T>(request: IRequest): Promise<T> {
  return await makeRequest(request, "POST");
}

// Called remove instead of delete because "delete" is a protected keyword
async function remove<T>(request: IRequest): Promise<T> {
  return await makeRequest(request, "DELETE");
}

export async function getDogs(): Promise<any> {
  const request: IRequest = {
    endpoint: `dogs`,
  };

  const response = await get<any>(request);
  return response;
}