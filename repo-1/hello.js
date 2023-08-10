console.log("hello from repo-1")
//bom
// console.log(window)
//dom
// console.log(document)
// NODEjs不能使用bom和domApi,可以使用console和定时器api
// nodejs中的全局对象是global,也可以使用globalThis 代替window
setTimeout(() => {
    console.log("hello from repo-1")
},5000);