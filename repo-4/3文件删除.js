/**
 * ClassName: 文件删除
 * Description:
 * @Author: hzr
 * Date: 2023/8/12 9:11
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/12 9:11   @Version 1.0        描述
 */
const fs = require('fs');
//2.删除文件
// fs.rmdir('../repo-1/重命名观书有感.txt',err=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('删除成功');
// });
//3.递归删除文件夹
fs.rm('./创建文件夹/',{recursive: true},err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('删除成功');
});