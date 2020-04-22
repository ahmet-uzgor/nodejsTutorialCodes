const events = require("events");
const emitter = new events.EventEmitter();
let likeCount = 0 ;
let likedIt =false ;

emitter.on('increase like',()=>{
    likeCount++;
    console.log("Your like number is",likeCount);
});

function deneme(bool1){
    likedIt = bool1 ;
    if(likedIt==true){
        emitter.emit('increase like');
    }
    else {
        console.log("you did not like it wont be shown again");
    };
};

deneme(true);