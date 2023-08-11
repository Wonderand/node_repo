/**
 * 新建一个文件，座右铭.txt，写入内容，三人行必有我师焉，择其善者而从之，其不善者而改之。
 */
//1.引入fs模块
const fs = require('fs');
//2.创建写入流
//异步执行
fs.writeFile("座右铭.txt","三人行必有我师焉，择其善者而从之，其不善者而改之。",{flag:"a"},(err)=>{
    //err写入失败：错误对象 写入成功：null
    if(err){
        console.log(err);
        return;
    }
    console.log("写入成功");
});
//同步写入
fs.writeFileSync("data.txt",'test');