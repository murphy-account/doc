// 服务器接收请求并给出返回值
const http = require('http')
const url = require('url')
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
    // console.log('请求进来了');
    let {pathname, query} = url.parse(req.url)
    console.log(pathname, '-------', query);
    // post
    let arr = []
    req.on('data', (data)=>{
        arr.push(data)
    })
    req.on('end',()=>{
        let obj = Buffer.concat(arr).toString()
        // console.log(Buffer.concat(arr).toString());
        //判断请求头是什么数据格式，进行相应的处理
        if(req.headers['content-type']==='application/json'){
            let a = JSON.parse(obj)
            a.add = '新增的add属性'
            // console.log('json...', a);
            res.end(JSON.stringify(a))
        } else if(req.headers['content-type']==='application/x-www-form-urlencoded'){
            let ret = querystring.parse(obj)
            console.log('x-www-formData', obj);
            res.end(JSON.stringify(ret))
        }
        
    })
})
server.listen(1234,()=>{
    console.log('server is running');
})