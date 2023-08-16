/**
 * ClassName: 02提url和查询字符串
 * Description:
 * @Author: hzr
 * Date: 2023/8/16 10:49
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/16 10:49   @Version 1.0        描述
 */
//1.导入http模块
const http = require('http');

//2.创建http服务
const server = http.createServer((request,response)=>{

    //实例化url对象
    let urlObj = new URL('/abc?name=hzr','http://localhost:9000');
    console.log(urlObj);
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
server.listen(9000,()=>{
    console.log('服务已启动');
});