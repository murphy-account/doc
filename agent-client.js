// 模拟客户端发送请求
const http = require('http')
// http.get({
//     host: 'localhost', // 主机地址
//     port: 1234,
//     path: '/?a=1'
// },(res)=>{

// })

// 发送POST请求
let options = {
    host: 'localhost', // 主机地址
    port: 1234,
    path: '/?a=1',
    method: 'POST',
    headers: {
        // 'Content-type': 'application/json'
        'Content-type': 'application/x-www-form-urlencoded'
    }
}
let req = http.request(options,(res)=>{ // 可写流
    let arr = []
    res.on('data',(data)=>{
        arr.push(data)
    })
    res.on('end',()=>{
        console.log(Buffer.concat(arr).toString());
    })
})
// req.end('{"name":"neil","sex":"male"}')
req.end('a=1&b=2')