import axios from "axios";

export const api = axios.create({
  baseURL: "https://site-api.datocms.com",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_TOKEN}`,
    Accept: "application/json",
    "X-Api-Version": "3",
  },
});

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
