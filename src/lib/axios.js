import axios from 'axios'
// const baseURl = 'https://m.ciweishixi.com' //混合开发没有跨域，添加baseURL ,去掉/api
const baseURl = '/api'
export function Get(url, params)  {
    let _url = baseURl + url
    return new Promise((resolve, reject) => {
        axios.get(_url, {params}).then(function (response) {
            resolve(response.data)
        })
                .catch(function (err) {
                    reject(err)
                })
    })
}

export function Post(url, params) {
    let _url = baseURl + url
    return new Promise((resolve, reject) => {
        axios.post(_url, {params}).then(function (response) {
            resolve(response.data)
        })
                .catch(function (err) {
                    reject(err)
                })
    })
}