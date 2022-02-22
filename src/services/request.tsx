import axios from 'axios';
import { createHashHistory } from 'history';
axios.defaults.withCredentials = true;
// axios.defaults.timeout = 10000
// axios.defaults.headers = {
//     'Content-Type': 'application/json',
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'withCredentials': true
// }
// axios拦截器
axios.interceptors.request.use(config => {
    return config
}, error => {
    // return Promise.error(error);
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}, (error) => {
    if (error.response.status) {
        switch (error.response.status) {
            // 500: 服务器故障
            case 401:
                // axios.get('/users/tologin').then((url) => {
                //     Modal.error({
                //         title: '警告',
                //         content: '登录过期，请重新登录',
                //         okText: '确认',
                //         onOk: () => {
                //             if (url && url.data) {
                //                 let urlArr = url.data.split('//')
                //                 if (urlArr[0] == 'http:') {
                //                     window.location.href = url.data
                //                 } else {
                //                     message.error('服务器错误')
                //                 }
                //             } else {
                //                 message.error('服务器错误')
                //             }
                //         }
                //     });
                // })
                break;
            case 403:
                // notification.error({
                //     key: '403err',
                //     message: '无访问权限',
                //     description: '没有访问权限，请重新登录'
                // })
                createHashHistory().push('/login');
                break;
            case 500:
                // notification.error({
                //     key: '500err',
                //     message: '禁止',
                //     description: error.response.data.message || '服务器故障'
                // })
                break;
            // 404请求不存在
            case 404:
                // notification['error']({
                //     message: '错误',
                //     description: '访问资源不存在'
                // })
                break;
            default:
                break;
        }
    }
    // 对响应错误做点什么
    return Promise.reject(error);
});
/**
  * get方法，对应get请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
export function get(url: string, params?: any) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: {
                ...params,
                t: new Date().getTime()
            }
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    });
}
/**
  * post方法，对应post请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
export function post(url: any, params?:any, config?:any) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, config)
            .then(res => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err)
            })
    });
}
/**
  * postF方法，对应post请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
export function postF(url: any, params: any) {
    return new Promise((resolve, reject) => {
        axios.post(url, null, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    });
}
export function postJSON(url: any, params: any) {
    return new Promise((resolve, reject) => {
        axios.post(url, params, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    });
}