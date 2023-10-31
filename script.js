let t1 =new Promise ((resolve, reject) => {
    resolve("Task 1 completed successfully")
});

let t2 = new Promise ((resolve, reject) => {
    resolve("Task 2 completed successfully")
});

let t3 = new Promise ((resolve, reject) => { 
    resolve("Task 3 completed successfully");
  });

//   Promise.all([t1, t2, t3]).then((messages) => console.log(messages))
// Promise.race([t1, t2, t3]).then((message) => console.log(message)); ////// Returns whichever is resolved faster
