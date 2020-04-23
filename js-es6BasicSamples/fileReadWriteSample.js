const fs = require("fs");


fs.readFile("demo.txt",(error,data)=>{
    if(error){
        console.log(error);
    };
    console.log(data.toString());
});

fs.appendFile("demo.txt","we will append a new sentence",(err)=> {
    if (err){
        throw err;
    };

    console.log("Append job is done");
});

//write will be written over file and deletes previous version
fs.writeFile("demo.txt","This will be written on demo.txt",(err)=>{
    if(err){
        throw err;
    };
    console.log("write job is done ");
});

// if you want to delete file fs.unlink() function 
/*fs.unlink("demo.txt",(err)=>{
    if (err){
        throw err;
    }
    
    console.log("It is deleted successfully ...");
});
*/
