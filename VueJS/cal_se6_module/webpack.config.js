const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry:{ 
        main:'./src/main.js'
    },
    
    output:{
        filename:'./build.js', 
        path: path.join(__dirname,'build')          
    },
    module:{
        loaders:[       
            {test:/\.css$/,
             loader:'style-loader!css-loader',
            },
            {
             test:/\.(jpg|svg|png|gif)$/,
             loader:'url-loader?limit=4096&name=[name].[ext]'        
             // options:{
             //    limit:4096,
             //    name:'[name].[ext]'
             // }
            },
            {// 处理ES6的JS
             test:/\.js$/,
             loader:'babel-loader',
             options:{
                presets:['es2015'], //关键字
                plugins:['transform-runtime']// 函数
             },
             // 排除 node_modules
             exclude:/node_modules/
            }
        ]
    },

    plugins:[
        // 将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录
        new htmlWebpackPlugin({
            template:'./src/index.html',
        })
    ]
}