import axios from 'axios'
import qs from 'qs'

export const API_DOMAIN = process.env.REACT_APP_ROOT_API

const HTTP = {
  request(method, url, data, headers = {}) {
    // perform axios request
    return axios.request({
      url,
      data: qs.stringify(data),
      method,
      headers: Object.assign(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        },
        headers
      )
    })
  },
  requestPost(method, url, data, headers = {}) {
    // perform axios request
    return axios.request({
      url,
      data,
      method,
      headers: Object.assign(
        {
          'Content-Type': 'application/json'
        },
        headers
      )
    })
  },
  requestUpload(method, url, data) {
    return axios.request({
      url,
      data,
      method,
      headers: Object.assign(
        {
          'Content-Type': 'multipart/form-data'
        }
      )
    })
  },
  requestDownload(method, url, responseType) {
    // perform axios request
    return axios.request({
      url,
      method,
      headers: Object.assign(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        }
      ),
      responseType
    })
  },
  get(url, data, headers = {}) {
    return this.request('get', `${url}`, data, headers)
  },
  post(url, data, headers = {}) {
    return this.request('post', `${url}`, data, headers)
  },
  put(url, data, headers = {}) {
    return this.request('put', `${url}`, data, headers)
  },
  postReq(url, data, headers = {}) {
    return this.requestPost('post', `${url}`, data, headers)
  },
  postUpload(url, data) {
    return this.requestUpload('post', `${url}`, data)
  },
  putUpload(url, data) {
    return this.requestUpload('put', `${url}`, data)
  },
  patch(url, data, headers = {}) {
    return this.request('patch', `${url}`, data, headers)
  },
  delete(url, data, headers = {}) {
    return this.request('delete', `${url}`, data, headers)
  },
  init() {
    axios.defaults.baseURL = API_DOMAIN
  }
}

export default HTTP
