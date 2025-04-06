//Creating a promise method. The promise will get resolved when timer times out after 6 seconds. | 3
let myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Promise resolved")
    },6000)})

//Console log before calling the promise | 1
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message. | 4
myPromise.then((successMessage) => {
    console.log("From Callback " + successMessage)
  })

//Console log after calling the promise | 2
  console.log("After calling promise");