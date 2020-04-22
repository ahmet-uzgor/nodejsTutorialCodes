const user = {id:10 , name:"ahmet"};
const friends = [{id:11,name:"kemal"},{id:12,name:"cemal"}];

const getUser = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(user);
        },1000);
    });
}

const getFriends = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(friends);
        },500);
    });
}


// Nested promise function 

getUser().then((user)=>{
    getFriends().then((friends)=>{
        console.log("First way");
        console.log(user);
        console.log(friends);
    })
});

// With Promise chain


getUser()
    .then((user)=>{
        return  getFriends();
    })
    .then((friends)=>{
        console.log("Second Way");
        console.log(user);
        console.log(friends);
    });



// Async and Await Function 

async function sampleAsyncFunc(){
    console.log("Firstly this will run and shows user");
    const user = await getUser();
    console.log(user,"async");
    const friends = await getFriends();
    console.log(friends,"async");
};

sampleAsyncFunc();

