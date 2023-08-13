/**
 * ClassName: 删除文件夹
 * Description:
 * @Author: hzr
 * Date: 2023/8/12 9:20
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/12 9:20   @Version 1.0        描述
 */
const fs = require('fs');
//2.删除文件夹
// fs.rmdir('./创建文件夹',err=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除成功');
// });
//3.递归删除文件夹
fs.rm('./a',{recursive: true},err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除成功');
})