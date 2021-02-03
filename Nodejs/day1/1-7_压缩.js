var fs=require("fs");
var zlip=require("zlib");

fs.createReadStream("./text/1.txt")
    .pipe(zlip.createGzip())
    .pipe(fs.createWriteStream("./text/1.txt.gz"));

console.log("success");