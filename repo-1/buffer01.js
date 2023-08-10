let buffer01 = Buffer.from([105,108,111,118,101,121,111,117]);
console.log(buffer01.toString());

let buffer02 = Buffer.from("hello");
console.log(buffer02[0].toString(16));
console.log(buffer02);
buffer02[0] = 113;
console.log(buffer02.toString());

