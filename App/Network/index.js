import {requireNativeComponent} from 'react-native';
const Properties = requireNativeComponent('Properties',null);
const API_PATH = 'http://down.evcoming.com:5141/zdou_app/';

 async function _param(obj = {},encript = true) {
    // let _ = encodeURIComponent
    // return Object.keys(obj).map(k => `${_(k)}=${_(obj[k])}`).join('&')
    let data = JSON.stringify(obj);
    if (encript) {
      return await Properties.encryptParameters(data);
    }
    else {
      return data;
    }
}

function _networkDone(res) {
    if (!res['err_code']) {
        return res
    } else {
        return Promise.reject(res)
    }
}
function _networkFail(...args) {
    return Promise.reject(null)
}
function _fetch(url, data, method,encript=true) {
    return fetch(url, {
        body: JSON.stringify(data),
        method,
        credentials: 'same-origin'
    })
}

export function ajax({url, query, data, method = 'GET',encript = true}) {
    url = API_PATH + url + '?' + _param(query)

    let parm = _param(data,encript);
    let promise = _fetch(url, data, method).bind(this);
    let success = _networkDone.bind(this)
    let failure = _networkFail.bind(this)

    return promise.then(resp => resp.ok ? resp.json().then(success) : failure(resp))
}
