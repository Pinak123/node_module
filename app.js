const http = require('http');
const {readFile} = require('fs');

// readFile("./first.txt" , "utf8" , (error, data) => {
//     if (error) {
//         return;
//     }else{
//         console.log(data);
//     }
// })

let getText= path =>{
    return new Promise((resolve, reject) =>{
        readFile(path , "utf8", (error, data) =>{
            if (error) {
                reject(error);
            }else{
                resolve(data);
            }
        });
    })
};


getText("./Asynk/first.txt").then(res => console.log(res)).catch(err => console.log(err));
 const f=async () =>{
    let first = await getText("./Asynk/first.txt");
    let second = await getText("./Asynk/sec.txt");
    return [first, second];
};
f().then((mess)=> console.log("This is the proise",mess));
