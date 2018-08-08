import axios from "axios";
const baseUrl = "http://172.17.1.234:3001";
const options = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

module.exports = {
  async getMethod(params) {
    try {
      const data = {
        method: "GET",
        qs: params.body,
        headers: options.headers
      };

      const response = await fetch(`${baseUrl}/${params.url}`, data);
      console.debug(response);
      const body = JSON.parse(response._bodyInit);
      const status = response.status;
      const res = { status: status, response: body };
      return res;
    } catch (error) {
      throw error;
    }
  },

  async postMethod(params) {
    try {
      console.log("AHUEVO");
      const response = axios({
        url: params.url,
        method: "post",
        baseURL: baseUrl,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        data: params.body,
        timeout: 15000
      });
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
