import HTTP from './http'

const GET_API = (path, data, headers) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.get(path, data, headers)
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  return promise
}

const POST_API = (path, data, headers) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.post(path, data, headers)
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  return promise
}

const POST_REQ_API = (path, data, headers) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.postReq(path, data, headers)
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  return promise
}

const POST_UPLOAD_API = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.postUpload(path, data)
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  return promise
}

const PUT_UPLOAD_API = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.putUpload(path, data)
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  return promise
}

const PATCH_API = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.patch(path, data)
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  return promise
}

const PUT_API = (path, data, headers) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.put(path, data, headers)
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  return promise
}

const DELETE_API = (path, data, headers) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.delete(path, data, headers)
      .then(result => {
        resolve(result.data)
      })
      .catch(err => {
        reject(err)
      })
  })
  return promise
}

const methods = {
  GET_API,
  POST_API,
  POST_REQ_API,
  POST_UPLOAD_API,
  PUT_UPLOAD_API,
  PATCH_API,
  PUT_API,
  DELETE_API
}

export default methods
