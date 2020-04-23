const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on('request',(req,res)=>{

/*    This method use memory fully size of file.txt file. It is bad for memory usage.
    fs.readFile('file.txt',(err,data)=>{
        if(err){
            throw err;
        }

        res.end(data);
    });
*/  

    const readStream = fs.createReadStream('file.txt');
    readStream.pipe(res);
});

server.listen(8080);
