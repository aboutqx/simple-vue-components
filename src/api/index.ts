import axios from 'axios'
import { Ok, Err, Reject } from './RequestAnswer'
// application/x-www-form-urlencoded
function toUrlEncoded (data) {
  if (!data) return null
  let str
  let keys = Object.keys(data)
  str = keys.reduce((accumulator, current, currentIndex) => {
    let t
    if (Array.isArray(data[current])) {
      if (typeof data[current][0] === 'object') {
        t = JSON.stringify(data[current])
      } else t = data[current].join(',')
    } else if (typeof data[current] === 'object') {
      t = JSON.stringify(data[current])
    } else {
      t = data[current]
    }
    accumulator +=
      encodeURI(current) +
      '=' +
      encodeURI(t) +
      (currentIndex === keys.length - 1 ? '' : '&')
    return accumulator
  }, '')
  return str
}

function useApi (url: string, method: string, resolve, reject?, data?) {
  if (method === 'post') {
    return axios({
      method,
      url,
      data: toUrlEncoded(data)
    })
      .then(_resovle)
      .catch(Err)
  } else if (method === 'get') {
    return axios({
      method,
      url: !data ? url : url + '?' + toUrlEncoded(data)
    })
      .then(_resovle)
      .catch(Err) // deal with network error
  } else {
    throw new Error('Method has to be get or post.')
  }
  function _resovle (result) {
    const data = result.data
    if (!data.status) {
      Reject({ message: '未登录' })
    } else if (data.status === 'success') {
      resolve(data)
    } else {
      reject ? reject(data) : Reject(data)
    }
  }
}

export { useApi, Ok, Err }
