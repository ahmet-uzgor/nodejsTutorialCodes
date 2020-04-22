function firstFunc (callback){
    setTimeout(function(){
        console.log("1.function");
        callback(thirdFunc)
    },1000);
}

function secondFunc(callback){
    console.log("2. function");
    callback()
}

function thirdFunc(){
    console.log("3. function");
}

firstFunc(secondFunc);