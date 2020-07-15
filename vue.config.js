module.exports = {
    configureWebpack:{
        devServer:{
            port:8089,//端口号
            open:false,
            //mock 接口编写的地方,每次更改这个地方需要重启
            before(app){
                // app.get('请求地址',(req,res)=>{
                //     res.json({
                //
                //     })
                // })
                // 注册接口 用户信息池
                let userpoor=[
                    {username:'xiaod',password:'123456'},
                    {username:'tim',password:'123456'}
                ];
                app.get('/api/register',(req,res)=>{
                    const {username,password} = req.query;
                    const userlength=userpoor.filter(v=>v.username==username).length

                    if(userlength>0){
                         res.json({
                             success:false,
                             message:'用户名已存在'
                         })
                    }else{
                        res.json({
                            success:true,
                            message:'注册城成功'
                        })
                    }
                });
                // 登录接口
                let tokenkey = 'xzstudy';
                app.get('/api/login',(req,res)=>{
                    const {username,password} = req.query;
                    if(username == 'xiaod' && password == '123456' || username == 'tim' && password == '123456'){
                        res.json({
                            code:0,
                            message:'登录成功',
                            token:tokenkey+'-'+username+'-'+(new Date().getTime()*60*60*100)
                        })
                    }else{
                        res.json({
                            code:1,
                            message:'账号或密码错误'
                        })
                    }
                });
                //首页轮播图接口
                //首页轮播图数据接口
                app.get('/api/banner',(req,res)=>{
                    res.json({
                        data:[{
                            url: 'https://m.xdclass.net',
                            image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594791853744&di=d04b030652f45674534027e843aca16d&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F22%2F59%2F19300001325156131228593878903.jpg'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png'
                            }]
                    })
                })
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
};
