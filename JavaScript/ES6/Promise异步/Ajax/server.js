/**
 * 用express框架，写一个小型服务器
 */
// 1. 引入express 要npm包 common.js导包的方法
const express = require("express");

// 2.创建应用对象
const app = express();

// 3.编写路由规则
//request是对请求报文的封装
//response是对响应报文的封装
/*当客户端浏览器向服务端发送请求时，如果请求行的第二个内容是/server时，会执行回调函数
并且由response做出回应 */
app.get('/server', (request, response) => {
    // 设置响应头，允许跨域，执行对应的服务器ip域名，让其可以将接收到的服务器数据显示在浏览器页面上
    response.setHeader("Access-Control-Allow-Origin", '*');
    // 设置响应头 允许使用响应头中的数据 Access-Control-Allow-Methods
    response.setHeader('Access-Control-Allow-Header', '*');
    //响应数据
    response.send("hello ajax get");
});

//路由规则
//all
app.all('/server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //响应头
  response.setHeader('Access-Control-Allow-Headers','*');
  //设置响应
  response.send('hello ajax post');
});

//路由规则
//all
app.all('/json-server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //响应头 表示此次请求中可以使用那些header字段， 符合请求头规范的字符串
  // Access-Control-Allow-Methods
  response.setHeader('Access-Control-Allow-Header','*');

  //响应一个数据
  const data = {
      name : 'atguigu'
  };

  //对对象进行字符串转换
  let str = JSON.stringify(data);
  //设置响应
  response.send(str);
});

//路由规则
//all
app.all('/json-server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //响应头
  response.setHeader('Access-Control-Allow-Header','*');

  //响应一个数据
  const data = {
      name : 'atguigu'
  };

  //对对象进行字符串转换
  let str = JSON.stringify(data);
  //设置响应
  response.send(str);
})

//专门针对ie缓存
app.get('/ie',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //响应头
  response.setHeader('Access-Control-Allow-Header','*');
  //设置响应
  response.send('hello IE 4');
})

//延时响应
app.get('/delay',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  
  setTimeout(()=>{
      //设置响应
      response.send('延时响应');
  },3000);
  
})

//4.监听端口启动服务
app.listen(8000,()=>{
  console.log("服务已经启动，8000端口监听中...")
})