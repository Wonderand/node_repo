/**
 * ClassName: 提取http报文
 * Description:
 * @Author: hzr
 * Date: 2023/8/14 11:46
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/14 11:46   @Version 1.0        描述
 */
//1.导入http模块
const http = require('http');
//2.创建http服务
const servet = http.createServer((request,response)=>{
    //获取请求的方法
    console.log(request.method);
    //获取请求的url
    console.log(request.url);
    //获取http协议的版本
    console.log(request.httpVersion);
    //获取请求头
    console.log(request.headers);

    response.end('http');
});
//3.监听端口，启动服务
servet.listen(9000,()=>{
    console.log('服务已启动');
})