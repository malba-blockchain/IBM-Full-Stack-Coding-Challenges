//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 1 resolved")
    },6000)})

let myPromise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved")
    },3000)})


/*
myPromise1.then(result1 => {
  console.log(result1);
  return myPromise2;
})
.then(result2 => {
  console.log(result2);
  console.log("All promies completed in sequence");
})
.catch(error => {
  console.error("Error occurred:", error);
});
*/

myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage)
})
myPromise2.then((successMessage) => {
  console.log("From Callback " + successMessage)
})

console.log("Promises chained, waiting for results...");