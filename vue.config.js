module.exports = {
    //关闭ESLint的规则
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:8081",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}