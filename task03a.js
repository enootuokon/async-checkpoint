//Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. 
//Chain these functions using await.

//ALGORITHM

//1. Create three async functions asyncFunction1, asyncFunction2, and asyncFunction3. 
//Each function should log a message after a delay of 1 second.
//2. Create a function chainedAsyncFunctions that calls the three async functions sequentially using await.
//3. Call the function chainedAsyncFunctions.


// CODE

async function asyncFunction1() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(" First asyncFunction 1 completed after 1 second delay");
}

async function asyncFunction2() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Second asyncFunction 2 completed after 1 second delay");
}

async function asyncFunction3() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Third asyncFunction 3 completed after 1 second delay");
}

async function chainedAsyncFunctions() {
  await asyncFunction1();
  await asyncFunction2();
  await asyncFunction3();
}


chainedAsyncFunctions();
