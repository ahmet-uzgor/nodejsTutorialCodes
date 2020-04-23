console.log("Welcome to setTimeout and setInterval Func. sample codes");
var sayi = 1 ;

function sayHi(){
    console.log("Hello Taksim");
}

function sayHavagi(){
    
    console.log("Hello Havagi", sayi);
}

var interval = setInterval(function(){
    console.log("Naber kız",sayi);
    sayi++;
    if(sayi==5){
        clearInterval(interval); // 5 saniye sonra sonlandırır.
    }
},1000);

setTimeout(sayHi,3000);
//setInterval(sayHavagi,1000); // her 1 saniyede basar
