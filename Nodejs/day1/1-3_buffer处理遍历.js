const bf=Buffer.from("bjyxszd");
for(const b of bf){
    console.log(b);
}
// 输出的是对应的ascii
// 键值对 对应

// Buffer里有 values(值) key(键)  entries(键值组)

// for(const value of bf.values()){
//     console.log(value);
// }

// for(const key of bf.keys()){
//     console.log(key);
// }

// for(const ent of bf.entries()){
//     console.log(ent);
// }


// 把字符串拷贝给buffer
// 创建的缓冲区必须大于字符串

const str="http://bjyxszd.com";
const bf1=Buffer.allocUnsafe(str.length);

for(let i=0;i<str.length;i++){
    bf1[i]=str.charCodeAt(i);   //取字符串的角标索引
}
console.log(bf1.toString("ascii"));



// 向缓冲区添加字符   fill

const bf2=Buffer.allocUnsafe(26);
// 全部是感叹号
const bf3=Buffer.allocUnsafe(26).fill("?");
console.log(bf2);
console.log(bf3.toString("ascii"));

// 把bf2变成英文字母表
for(let i=0;i<26;i++){
    bf2[i]=i+97;
}
console.log(bf2.toString("ascii"));

// copy()第一个参数拷贝到的缓冲区名字
//         二  拷贝到的缓冲区的起始位置
//         三 四  被拷贝的起始位置和终止位置
 
bf2.copy(bf3,4,5,10);
console.log(bf3.toString("ascii"));


// 比较串是否相同  compare   输出 0 -1      一个字符一个字符比
//                equals    输出 true false   按串比
