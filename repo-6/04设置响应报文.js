/**
 * ClassName: 04设置响应报文
 * Description:
 * @Author: hzr
 * Date: 2023/8/23 22:06
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/23 22:06   @Version 1.0        描述
 */
// 1.导入http模块
const http = require('http');
// 2.创建http服务
const server = http.createServer((request,response)=>{
    // 设置响应报文的状态码
    response.statusCode = 200;
    // 设置响应报文的描述
    response.statusMessage = 'test';
    // 设置响应报文的头部
    response.setHeader('Content-Type','text/html;charset=utf-8');
    // 设置响应报文的体
    response.write('你好');
    response.end('http');

});
// 3.监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务已启动');
})
