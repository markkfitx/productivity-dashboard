import globals from "../config/global.json"

// Create a default instance pointing to your ASP backend

export default class AspAPI {
  static baseUrl = globals.globalData[0].serverURL;

  static async get<T = any>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const url = new URL(endpoint, AspAPI.baseUrl);
    if (params) {
      Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
    }

    const res = await fetch(url.toString(), { credentials: "include" });
    if (!res.ok) throw new Error(`GET ${url} failed: ${res.statusText}`);
    return res.json();
  }

  static async post<T = any>(endpoint: string, body: Record<string, any>): Promise<T> {
    const url = new URL(endpoint, AspAPI.baseUrl);
    const res = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`POST ${url} failed: ${res.statusText}`);
    return res.json();
  }
}
/*
If you want to return JSON from your React app, you need a backend API.

Since Vite + React is a frontend tooling setup, it does not provide an API backend out of the box. 
You need:

1)  A separate backend server that serves JSON endpoints (Node.js/Express, or something else).
2)  Your ASP Classic code calls that backend server’s JSON endpoint.
3)  Your React app can call that API backend too (for data fetching).

*/

