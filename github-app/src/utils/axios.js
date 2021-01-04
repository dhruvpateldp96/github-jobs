import React from "react";
import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    console.log("API Request: ", config);

    // Do something before request is sent

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("API Response: ", response);
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("API Error: ", error);
    if (!error.response) {
      // network error
      console.log("NETWORK ERROR", "Lost internet connectivity");

      return [];
    }

    const code = parseInt(error.response && error.response.status);
    if (code !== 404 && code !== 500) {
      console.log("Err Response: ", error.response);
      var MSG = error.response.data.message || "Something went wrong!";
    }
    switch (code) {
      case 400:
        console.log(MSG);
        break;
      case 401:
        console.log(MSG);
        break;
      case 422:
        console.log(MSG);
        break;
      case 404:
        console.log("Resource does not exist");
        break;
      case 500:
        console.log(
          "Server is not responding at the moment. Please try again later."
        );
        break;
      default:
        console.log(
          "Server is not responding at the moment. Please try again later."
        );
        break;
    }
    return error.response;
  }
);

export default axios;
