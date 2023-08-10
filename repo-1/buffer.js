// 创建
let buffer = Buffer.alloc(10); // 创建一个长度为 10、且用 0 填充的 Buffer。
console.log(buffer);
let buffer1 = Buffer.allocUnsafe(10000); // 创建一个长度为 10、且未初始化的 Buffer。
console.log(buffer1);
let buffer2 = Buffer.from([1,2,3]); // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
console.log(buffer2);