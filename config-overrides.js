
const { injectBabelPlugin } = require('react-app-rewired');
const proxy = require('http-proxy-middlware')

const PATH = require('path')

function resolve(url) {
    return PATH.resolve(__dirname, 'src/', url)
}

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);

    // 配置别名
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(''),
        '@As': resolve('assets'),
        '@C': resolve('components'),
        '@Pages': resolve('pages'),
        '@Lib': resolve('lib')
    }
    return config;
};

module.export = function(app) {
    app.use(proxy('/api',{
        target: 'https://https://m.ciweishixi.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }))
}