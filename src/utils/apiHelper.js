import axios from 'axios'

/** @description 使用 axios post 方法呼叫 api
 * @param {String} url api 路徑
 * @param {Object} data request 參數(非必填)，預設值為空物件
 * @return {Object} Promise 物件
 */
const post = function (url, data = {}) {
    const headers = getRequestHeader()
    const config = {}
    if (headers) {
        config.headers = headers
    }
    return axios
        .post(url, data, config)
        .then(res => successHandler(res, data))
        .catch(errorHandler)
}


/** @description 使用 axios get 方法呼叫 api
 * @param {String} url api 路徑
 * @return {Object} Promise 物件
 */
const get = function (url) {
    const headers = getRequestHeader()
    const config = {}
    if (headers) {
        config.headers = headers
    }
    return axios
        .get(url, config)
        .then(res => successHandler(res, {}))
        .catch(errorHandler)
}

const getRequestHeader = function () {
    return {
        Authorization: 'abcdefg'
    }
}

const errorCodes = [
    { statusCode: 400, message: '無法解讀 Request' },
    { statusCode: 401, message: '登入逾時，請重新登入' },
    { statusCode: 403, message: '登入逾時，請重新登入' },
    { statusCode: 500, message: '發生異常狀況' },
    { statusCode: 520, message: '找不到資料' },
    { statusCode: 521, message: '資料已存在' },
    { statusCode: 522, message: '傳入參數異常' },
    { statusCode: 523, message: '登入失敗' }
]

const errorHandler = function (error) {
    console.group(`[${error.config.method}] ${error.config.url}\n`)
    let message = '發生異常狀況，請稍後再試。'
    if (error.response) {
        const mapStatusError = errorCodes.find(item => item.statusCode === error.response.status)
        if (mapStatusError) {
            message = mapStatusError.message
        }

        // 增加特例輸出
        const mexpect = apiexception.find(Element => Element.url === error.config.url)
        if (mexpect) {
            message = error.response.data.message
        }

        console.log('error status => ', error.response.status)
    } else {
        if (error.message) {
            message = error.message
        }
        console.log('error message => ', message)
        if (error.message === 'Network Error') message = '網路發生異常，請稍後再試'
    }
    console.groupEnd()

    return Promise.resolve({
        success: false,
        message
    })
}

const successHandler = function (response, reqData) {
    const { data, config: { url, method } } = response
    console.group(`[${method}] ${url}\n`)
    if (reqData.entries) {
        const paramsObject = {}
        for (var pair of reqData.entries()) {
            paramsObject[pair[0]] = pair[1]
        }
        console.log('request FormData => ', paramsObject)
    } else {
        console.log('request data => ', reqData)
    }
    console.log('response data => ', data)
    console.groupEnd()
    console.log('\n')
    return data
}


export {
    post,
    get,
}
