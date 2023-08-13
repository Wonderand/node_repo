/**
 * ClassName: 批量重命名
 * Description:
 * @Author: hzr
 * Date: 2023/8/13 19:18
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/13 19:18   @Version 1.0        描述
 */
//1.导入fs模块
const fs = require('fs');
//2.读取文件夹
fs.readdir('../repo-4',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    //3.遍历文件夹
    for (let i = 0; i < data.length; i++) {
        //4.重命名
        fs.rename(data[i],i+data[i]+'.js',err=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('重命名成功');
        });
        console.log(data[i]);
    }
});