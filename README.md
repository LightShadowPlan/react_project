## 使用React框架模仿刺猬实习实现一个移动端应用
----
### 项目主要目录
* componente 公共组件
* pages 页面组件
* lib 插件目录

### 路由
* src/index.js 使用路由组件包裹 APP 组件
* src/components/commons/router.js 中设置各种路由小组件
* src/APP.js 设置路由处理页面逻辑


### 配置文件路径调用
* 项目安装 react-app-rewired 模块
* 在项目目录中的config-overrides.js 中添加代码
```javascript
const { injectBabelPlugin } = require('react-app-rewired');
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
```


### 跨域
* 无需通过 eject 抽取配置文件，此过程不可逆。
* 项目生产环境安装 http-proxy-middleware 模块，在src目录中新建一个文件 setupProxy.js。
* 文件内容如下： 
```javascript
const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(proxy('/api',{
        target: 'https://m.ciweishixi.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }))
}
```
 
