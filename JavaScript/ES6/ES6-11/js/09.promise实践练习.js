//回调地狱
//1.引入fs模块
const fs = require('fs');

//2.调用方法 读取文件
// fs.readFile('./resource/为学.md',(err, data1)=>{
//     fs.readFile('./resource/second.md',(err, data2)=>{
//         fs.readFile('./resource/third.md',(err, data3)=>{
//             let result = data1 +'\r\n'+ data2 +'\r\n'+ data3;
//             console.log(result);
//         })
//     })
// })

//将异步操作封装到promise对象当中去
const p = new Promise((resolve, reject)=>{
    fs.readFile('./resource/为学.md', (err, data)=>{
        resolve(data);
    });
});

//就会执行then中的函数
p.then((value)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./resource/second.md',(err, data)=>{
            resolve([value, data]);
        });
    });
}).then((value)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('./resource/third.md',(err, data)=>{
            //存入数组  可以用push 也可以用解构
            resolve([...value,data]);
        });
    });
}).then((value)=>{
    console.log(value.join("\r\n"));
})