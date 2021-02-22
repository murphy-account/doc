const fs = require('fs');
const path = require('path')
// // 看目标文件是否可读
// fs.access('a.txt',(err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('aaa');
//     }
// })

// // 获取目标文件信息
// fs.stat('a.txt',(err,stats)=>{
//     if(err)throw err;
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats.size);
// })

// //创建文件夹
// fs.mkdir('a/b/',err=>{
//     if(!err){
//         console.log('success');
//     }else{
//         console.log(err);
//     }
// // 目录不存在就会报错
// })

// //删除空文件夹
// fs.rmdir('a/b',(err)=>{
//     if(!err)console.log('success');
//     console.log(err);
// })

// //删除非空文件夹
// fs.rmdir('a/b',{recursive:true},(err)=>{
//     if(!err)console.log('success');
//     console.log(err);
// })

// //读取目录
// fs.readdir('a',(err,files)=>{
//     if(!err)console.log(files);
// })
// /**
//  * 返回[ 'b', 'f.txt' ]
//  */

//  //删除文件
//  fs.unlink('a/c.txt',err=>{
//      if(!err)console.log('success');
//  })


