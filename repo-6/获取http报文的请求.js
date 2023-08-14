/**
 * ClassName: 获取http报文的请求
 * Description:
 * @Author: hzr
 * Date: 2023/8/14 12:09
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/14 12:09   @Version 1.0        描述
 */
//1.导入http模块
const http = require('http');
//2.创建http服务
const server = http.createServer((requset,response)=>{
    //声明一个变量，用于存储请求报文的数据
    let body = '';
    //绑定date事件
    requset.on('data',chunk=>{
        body += chunk;
    })
    //绑定end事件
    response.on('end',()=>{
        console.log(body)
        response.end('http')
    });
});
//监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务已启动');
});