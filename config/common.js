//生产环境和开发环境
let pro = process.env.NODE_ENV == "production" ? true : false

module.exports={
  webpack:{
    //本地调试时的地址
    ip:"localhost",
    //本地调试时的端口
    dev_port:3000,
    //发布后的网站title
    title:"智慧校园"
  },
  web:{
    url:pro?"":"",
    api:"/mock"
  }
}
