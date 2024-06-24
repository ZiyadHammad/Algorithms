// Implement the runSequentially fn, that should return a promise that resolves to an array of results. 
// The first argument to runSequentially , functions, is an array of functions where each function from 
// the functions array returns a Promise. The functions should be ran sequentially, one after another. If 
// any of the functions throw an exception, the runSequentially should reject the Promsie. The first
// element in the result array should be the result of the first function frm the functions array.
// the second element in result array should be the result of the second function from the functions array, and so on.

// For exmaple, the following code should print '[2,3]'

async function runSequentially(functions) {
  // Write your code here
}

let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
      counter += 1;
      resolve(counter);
  });
}
let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
if(promise) {
  promise.then(result => console.log(result))
  .catch(error => console.log("Error: " + error));
}
module.export = runSequentially;