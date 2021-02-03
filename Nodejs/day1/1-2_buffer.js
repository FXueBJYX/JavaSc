// buffer   fs    stream
// 按字节进行读   
// 三码一致 文件编码 浏览器解码  数据库编码


// 创建缓冲区
const bf1=Buffer.alloc(10);
// 大小是10
console.log(bf1);

// 随机生成
const bf2=Buffer.allocUnsafe(10);
console.log(bf2);

// 第二个参数是指定生成什么数
const bf3=Buffer.alloc(10,1);
console.log(bf3);

// 可以这么用  但是是老版本   会出警告
// const bf4=Buffer([1,2,3]);
// console.log(bf4);

const bf4=Buffer.from([1,2,3]);
console.log(bf4);

// 可以是字符串  输出的是ascii码
const bf5=Buffer.from("test","latin1");
console.log(bf5);

// 转换16进制
const bf6=Buffer.from("hello","ascii");
console.log(bf6.toString("hex"));

// 按base64转
const bf7=Buffer.from("http://www.163.com//2.revb","ascii");
console.log(bf7.toString("base64"));




// 针对原生模块：用require加载  自动加载
// 自动加载 ：global buffer console(原生js不支持  chrome支持？)   process module export timer