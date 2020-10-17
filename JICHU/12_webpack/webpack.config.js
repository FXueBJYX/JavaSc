const path = require('path');

module.exports = {
    // 入口
    entry: {
        index: './src/index.js'
    },
    // 出口
    output: {
        // 绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

