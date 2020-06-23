module.exports = {
    configureWebpack:{
        devServer:{
            port:8089,//端口号
            open:true,
            //mock 数据
            before(app){

            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
