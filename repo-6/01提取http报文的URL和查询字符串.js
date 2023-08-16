/**
 * ClassName: 提取http报文的URL和查询字符串
 * Description:
 * @Author: hzr
 * Date: 2023/8/16 10:33
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/16 10:33   @Version 1.0        描述
 */
//1.导入http和url模块
const http = require('http');
const url = require('url');

//2.创建http服务
const server = http.createServer((requset,response)=>{
   response.end('url');
   //解析url
    let urlObj = url.parse(requset.url,true);
    console.log(urlObj);
    //路径
    console.log(urlObj.pathname);
    //查询字符串
    console.log(urlObj.query.name);
});
//监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务已启动');
});