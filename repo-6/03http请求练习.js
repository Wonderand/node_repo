/**
 * ClassName: 03http请求练习
 * Description:
 * @Author: hzr
 * Date: 2023/8/23 21:51
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/23 21:51   @Version 1.0        描述
 */
// 1.导入http模块
const http = require('http');
// 2.创建http服务
const server = http.createServer((request,response)=>{
    // 设置响应头
    response.setHeader('Content-Type','text/html;charset=utf-8');
    // 获取请求的方法
    let {method} = request;
    // 获取请求的url
    let {pathname} = new URL(request.url,'http://localhost:9000');
    if (method === 'GET' && pathname === '/login'){
        response.end('login 登录页面');
    }else if (method === 'GET' && pathname === '/register'){
        response.end('register');
    }else {
        response.end('not found');
    }
    console.log(method);
    console.log(pathname);

    // 请求的url
    console.log(request.url);
});
// 3.监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务已启动');
})
