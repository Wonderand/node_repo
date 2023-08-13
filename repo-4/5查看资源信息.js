/**
 * ClassName: 查看资源信息
 * Description:
 * @Author: hzr
 * Date: 2023/8/13 19:08
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/13 19:08   @Version 1.0        描述
 */
//1.导入fs模块
const fs = require('fs');
//2.查看文件信息
fs.stat('../repo-1/座右铭.txt',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log(data.isFile());
    console.log(data.isDirectory());
});
console.log(__dirname);