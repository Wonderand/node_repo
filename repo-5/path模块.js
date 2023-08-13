/**
 * ClassName: path模块
 * Description:
 * @Author: hzr
 * Date: 2023/8/13 19:46
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/13 19:46   @Version 1.0        描述
 */
//1.导入path模块
const path = require('path');
//规范化路径
console.log(path.resolve(__dirname,'./a','./b','./c','a.txt'));

//sep分隔符
console.log(path.sep);

//parse解析路径
console.log(__filename);//文件的绝对路径
let obj = path.parse(__filename);
console.log(obj);

//basename获取文件名
console.log(path.basename(__filename));

//获取路径的目录名
console.log(path.dirname(__filename));

//获取扩展名
console.log(path.extname(__filename));