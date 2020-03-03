module.exports = {
    devServer:{
        watchOptions:{
            poll:true
        },
        proxy: {
            '/api':{
                // target:'http://119.3.68.152:8088',
                target:'http://127.0.0.1:8088',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':'/api'
                }
            }
        }
    },
    publicPath:process.env.NODE_ENV === 'production' ? './' : '/'
}
