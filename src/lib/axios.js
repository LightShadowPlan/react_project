import axios from 'axios'

export function Get(url, params)  {
    let _url = url
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
    let _url = url
    return new Promise((resolve, reject) => {
        axios.post(_url, {params}).then(function (response) {
            resolve(response.data)
        })
                .catch(function (err) {
                    reject(err)
                })
    })
}