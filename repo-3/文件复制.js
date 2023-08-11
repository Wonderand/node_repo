/**
 * ClassName: 文件复制
 * Description:
 * @Author: hzr
 * Date: 2023/8/11 10:05
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/11 10:05   @Version 1.0        描述
 */
//1.引入fs模块
const fs = require('fs');
const process = require('process');
/**
 *方式1 readFile
 * @type {ReadStream}
 */
//读取文件
// let data = fs.readFileSync('C:\\Users\\22906\\Videos\\2022-04-15 20-53-44.mkv');
// //写入文件
// fs.writeFileSync('test1.mkv',data);
// console.log(process.memoryUsage()); //内存占用 rss: 55m
/**
 * 方式二 createReadStream
 * @type {ReadStream}
 */
//创建读取流对象
const rs = fs.createReadStream('C:\\Users\\22906\\Videos\\2022-04-15 20-53-44.mkv');
//监听读取流开启
const ws = fs.createWriteStream('test.mkv');
rs.on('data',chunk =>{
    //写入文件
    ws.write(chunk);
})
rs.on('end',()=>{
    console.log(process.memoryUsage()); //内存占用 rss: 35m
});

/**
 * 方式三 pipe
 */
rs.pipe(ws);