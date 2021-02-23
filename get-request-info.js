const http = require('http')
const url = require('url')

const server = http.createServer((req,res)=>{
    // console.log('进来了');
    // 获取请求信息：1，请求行 2 请求头 3 请求空行 4 请求体
    // 请求路径
    let {pathname, query} = url.parse(req.url, true)
    console.log(pathname, '----', query);
    // 请求方式
    console.log(req.method);
    // 版本号
    console.log(req.httpVersion);
    // 请求头
    console.log(req.headers);
    // 请求体数据获取（如果是POST请求的话就有请求体数据）
    // 在cmd中输入curl -v -X POST -d "'name':'lg'" http://localhost:1234/ 来发送一个POST请求
    let arr = []
    req.on('data',(data)=>{
        console.log('data', data); // 是一段Buffer数据
        arr.push(data)
    })
    req.on('end',()=>{
        console.log(Buffer.concat(arr).toString());
    })
})
server.listen(1234,()=>{
    console.log('server is start...');
})