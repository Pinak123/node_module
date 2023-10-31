let p= new Promise((resolve, reject) =>{
    a= 1+2
    if (a == 3) {
        resolve("The value of a is 3 ")
    }else{
        reject("The value of a is not 3")
    }
}).then((message) =>{
    console.log("This is the message inside the resolve:-",message)
}).catch((err) =>{
    console.log("This is the message inside the reject ",err)
});