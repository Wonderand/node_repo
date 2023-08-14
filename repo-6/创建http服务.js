/**
 * ClassName: 创建http服务
 * Description:
 * @Author: hzr
 * Date: 2023/8/14 11:21
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/14 11:21   @Version 1.0        描述
 */
//1.导入http模块
const http = require('http');
//2.创建http服务
const servet = http.createServer((request,response)=>{
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.end('你好');
});
//3.监听端口，启动服务
servet.listen(9000,()=>{
    console.log('服务已启动');
})