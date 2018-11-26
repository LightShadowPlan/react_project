import axios from 'axios'

const Axios = {
    get(url, that, callback) {
        axios({
            method: "GET",
            headers: {'Content-type': 'application/json',},
            url: url,
            withCredentials: true
        }).then(function (res) {
            console.log(res);
            callback(that, res);

        }).catch(function (error) {
            alert('get失败')
            console.log(error);
        });
    },
    post(url, data, that, callback) {
        axios({
            method: "POST",
            headers: {'Content-type': 'application/json',},
            url: url,
            data: data,
            //withCredentials:true
        }).then(function (res) {
            callback(that, res);
        }).catch(function (error) {
            alert('post失败')
            console.log(error);
        });
    },
    post_params(url, data, that, callback) {
        axios({
            method: 'post',
            url: url,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            params: data,
        }).then(function (res) {
            callback(that, res);
        }).catch(function (error) {
            alert('post失败')
            console.log(error);
        });
    }
}
export default Axios
