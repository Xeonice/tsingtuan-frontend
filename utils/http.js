class Request {
    constructor(parms) {
        this.withBaseURL = parms.withBaseURL
        this.baseURL = parms.baseURL
    }
    GET(url, data) {
        return this.request('GET', url)
    }
    POST(url, data) {
        return this.request('POST', url, data)
    }
    PUT(url, data) {
        return this.request('PUT', url, data)
    }
    DELETE(url, data) {
        return this.request('PUT', url, data)
    }
    request(method, url, data) {
        const vm = this
        return new Promise((resolve, reject) => {
            wx.request({
                url: vm.withBaseURL ? vm.baseURL + url : url,
                data,
                method,
                success(res) {
                    resolve(res)
                },
                fail() {
                    reject({
                        msg: '请求失败',
                        url: vm.withBaseURL ? vm.baseURL + url : url,
                        method,
                        data
                    })
                }
            })
        })
    }
}

const request = new Request({
    baseURL: 'http://localhost:5000/api',
    withBaseURL: true
})

module.exports = request