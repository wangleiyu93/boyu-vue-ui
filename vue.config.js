module.exports={
    publicPath:'./',
    pages:{
        index:{
            entry:'examples/main.js',//page的入口
            template:'public/index.html',//模版来源
            filename:'index.html',//在dist/index.html的输出
        }
    },
}