const CracoLessPlugin = require('craco-less')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const path = require('path')

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        }
    ],
    babel: {
        plugins: [
            ['@babel/plugin-proposal-decorators', {
                legacy: true
            }],
            [
                "import", {
                    "libraryName": 'antd',
                    "libraryDirectory": "es",
                    "style": true
                }
            ]
        ]
    },
    //配置代理解决跨域
    devServer: {
        proxy: {
            '/api': {
                target: "http://XXXXXXX",
                changOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    webpack: {
        //别名
        alias: {
            "@": path.resolve("src"),
            "@utils": path.resolve("src/utils"),
        },
        plugins: [
            // 查看打包的进度
            new SimpleProgressWebpackPlugin()
        ]
    }
}