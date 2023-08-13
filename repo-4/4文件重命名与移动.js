/**
 * ClassName: 文件重命名与移动
 * Description:
 * @Author: hzr
 * Date: 2023/8/12 9:06
 * History:
 * <author>          <time>          <version>          <desc>
 * hzr    2023/8/12 9:06   @Version 1.0        描述
 */
//1.导入fs模块
const fs = require('fs');
//2.重命名，调用rename方法
fs.rename('../repo-1/重命名观书有感.MD','../repo-1/重命名观书有感.txt',err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('重命名成功');
});
