/**
 * Axios Ajax Library - Wrapper
 */

/**
 * Import Axios library
 */
import axios from "axios";

/**
 * Import axios configuration object
 */
import axiosConfig from "./axios_config";

/**
 * @class Ajax
 * Axios Ajax class
 */
export default class Ajax {
  /**
   * initialize the data and attributes
   */
  constructor(options) {
    /**
     * Url to fetch
     */
    this.url = "";

    /**
     * HTTP method to use
     */
    this.method = "";

    /**
     * Options for axios
     */
    this.options = options || axiosConfig || {};

    /**
     * Optional query parameters if any
     */
    this.queryParameters = {};

    /**
     * Optional body to use in request (for post, patch)
     */
    this.body = {};

    /**
     * Initialize the axios instance
     */
    this.http = axios.create(this.options);
  }

  /**
   * @name makeRequest
   * @inner
   * Make a request with the options and parameters provided.
   * @param {String} url - The url string
   * @param {String} method - The HTTP method
   * @param {Object} queryParameters - The query parameters
   * @param {Object} body - The request body
   */
  makeRequest = (url, method, queryParameters, body) => {
    this.url = url
      ? url
      : (() => {
          throw new Error("URL required");
        })();
    this.queryParameters = queryParameters || {};
    this.body = body || {};
    this.method = method || "get";

    /**
     * Make the request
     */
    let request = this.http({
      method: this.method,
      url: this.url,
      params: this.queryParameters,
      data: this.body,
    });

    return request;
  };
}
