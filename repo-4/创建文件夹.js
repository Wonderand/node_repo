/**
 * ClassName: 创建文件夹
 * Description:
 * @Author: hzr
 * Date: 2023/8/12 9:15
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/12 9:15   @Version 1.0        描述
 */
const fs = require('fs');
//2.创建文件夹
fs.mkdir('../repo-4/创建文件夹',err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('创建成功');
});
//3.递归创建文件夹
fs.mkdir('../repo-4/创建文件夹/test/',{recursive: true},err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('创建成功');
});
//读取文件夹
fs.readdir('../repo-4/',(err,files)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(files);
});