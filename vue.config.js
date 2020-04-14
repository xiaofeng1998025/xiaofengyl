
let path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: "./",//根路径
    configureWebpack: {
        resolve: {
            alias: {
                '@img': '@/assets/images',
            }
        }
    },
    css: {
        loaderOptions: {

        }
    },
    devServer: {
        // proxy: {
        //     '/api': {
        //         target: 'http://122.51.231.8:8081', //API服务器的地址
        //         ws: true,  //代理websockets
        //         changeOrigin: true, // 虚拟的站点需要更管origin
        //         pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
        //             '^/api': ''
        //         }
        //     }
        // },
    }
}