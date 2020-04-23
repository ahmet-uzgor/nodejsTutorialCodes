const asyncFunc = () => {
    return new Promise((resolve,reject)=>{
        resolve('every thing is okey');
    });
}

asyncFunc().then((data)=>{
    console.log(data);
    return 1;
})
.then((data)=>{
    console.log(data);
    return 2;
})
.then((data)=>{
    console.log(data);
    setTimeout(()=>{
        console.log("ahmet uzgor")
    },1000);
    return "ahmet";
})
.then((data)=>{
    console.log(data);
})