const p = new Promise((res, rej)=>{
    setTimeout(()=>{
        rej("Hello World");
    },3000);
})
console.log(p);
p.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("there is error while resolving",err);
})