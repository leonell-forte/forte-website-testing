import axios from "axios";

export const api = axios.create({
  baseURL: "https://graphql.datocms.com",

  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_TOKEN}`,

    "Content-Type": "application/json",

    Accept: "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    return config;
  },

  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lies within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },

  function (error) {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
