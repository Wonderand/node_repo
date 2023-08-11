//1.引入fs模块
const fs = require('fs');
//2.创建写入流追加方法 fs.appendFile
fs.appendFile("座右铭.txt", "\n天行健，君子以自强不息",
    err => {
        if (err) {
            console.log("写入失败");
            return;
        }
        console.log("追加写入成功");
    });

//使用同步写入
fs.appendFileSync("座右铭.txt", "温故而知新，可以为师矣");

//使用witeFile方法，flag:a追加写入
fs.writeFile("座右铭.txt", "\n天行健，君子以自强不息", {flag: 'a'}, err => {

    if (err){
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
});