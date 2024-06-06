async function iterateAsyncAwait(arr) {
  //  reusable Promise function to create  a delay
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // traverse over the array of values
  for ( val of arr) {
    // Log the current array value
    console.log(arr);
    // Implement delay for 1 second before continuing to the next iteration
    await delay(1000);
  }
}

const arr = [1, 2, 3, 4, 5];
iterateAsyncAwait(arr);

//CLASS WORK
// async function logInterval(arr){
//   for(val of arr){
//       console.log(val);
//       await new Promise(resolve => setTimeout(resolve, 5000));
//   }
// }

// logInterval([1,2,3,4,5]);
