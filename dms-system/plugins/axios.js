import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001/'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
