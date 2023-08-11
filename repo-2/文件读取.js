/**
 * ClassName: 文件读取
 * Description:
 * @Author: hzr
 * Date: 2023/8/11 9:43
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/11 9:43   @Version 1.0        描述
 */
//1.导入fs模块
const fs = require('fs');
//2.创建读取流对象异步读取
fs.readFile('../repo-1/观书有感.txt', (err, data) => {
    //err读取失败：错误对象 读取成功：null
    if (err) {
        console.log(err,'读取失败');
        return;
    }
    console.log(data.toString());
});

//3.同步读取
let data = fs.readFileSync('../repo-1/观书有感.txt');
console.log(data.toString());