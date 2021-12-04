let proxyObj = {}

// 代理
proxyObj['/'] = {
    // websocket
    ws: false,
    // 代理到哪里去 目标地址
    target: 'http://localhost:8081',
    // 发送请求的请求头 host 会被设置成target
    changeOrigin: true,
    // 不重写请求地址
    pathRewrite: {
        '^/':'/'
    }
}

// p7-007
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj,
    }
}
