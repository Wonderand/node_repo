/**
 * ClassName: fs流式写入
 * Description: 观书有感.txt
 * @Author: hzr
 * Date: 2023/8/11 9:24
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/11 9:24   @Version 1.0        描述
 */
//1.导入fs模块
const fs = require('fs');

//2.创建写入流对象
const ws  =  fs.createWriteStream('./观书有感.txt');
//3.write方法写入数据
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');
//3.关闭流
ws.close();

