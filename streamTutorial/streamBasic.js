const fs = require("fs");
const file = "tp-dep4.mp4";
const writeStream = fs.createWriteStream("new.mp4");
let progress = 0;
let completeStat = 0;

const readStream = fs.createReadStream(file) ;

let totalLength = 0 ;
fs.stat(file,(err,data)=>{
    const total = data.size;
    totalLength = total;
    console.log(total/1000000);
});

readStream.on('data', (chunk)=>{
    progress += chunk.length;
    completeStat =  (progress/totalLength)*100;
    console.log("% %d of file is completed.",completeStat);
});

readStream.pipe(writeStream);
writeStream.on('finish',()=>{
    console.log("new file is created");
})

readStream.on('end',()=>{
    console.log("finished");
});
