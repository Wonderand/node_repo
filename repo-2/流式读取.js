/**
 * ClassName: 流式读取
 * Description:
 * @Author: hzr
 * Date: 2023/8/11 9:57
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/11 9:57   @Version 1.0        描述
 */
//1.导入fs模块
const fs = require('fs');

//2.创建读取流对象
const rs = fs.createReadStream('C:\\Users\\22906\\Videos\\2022-04-15 20-53-44.mkv');
//3.监听读取流开启
rs.on('data',chunk =>{
    console.log('读取流开启了');
    console.log(chunk.length);
});