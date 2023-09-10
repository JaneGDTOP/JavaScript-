//1.引入 fs 模块
const fs = require('fs');

//2.调用方法读取文件 回调函数
// fs.readFile('./resource/为学.md',(err, data)=>{
//     //如果出错 就抛出异常
//     if(err) throw err;
//     //如果没错就输出内容 输出的时buffer
//     console.log(data.toString());
// });

//3.使用promise封装异步操作
const p = new Promise(function(resolve, reject){
    //封装异步操作
    fs.readFile("./resource/为学.md",'r', (err,data)=>{
        //如果读取失败 获取失败的状态
        if(err) reject(err);
        //如果成功 打开成功的状态
        resolve(data);
    });
});

p.then(function(value){
    console.log(value.toString());
}, function(reason){
    console.log("读取文件失败！！");
});