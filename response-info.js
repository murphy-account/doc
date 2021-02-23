const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('有请求进来了');
    res.setHeader('Content-type', 'text/html;charset=utf-8')
    res.end('拉勾教育')
})
server.listen(1234,()=>{
    console.log('server is start ...');
})