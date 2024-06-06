//Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, 
//catch the error and log a user-friendly error message.


//ALGORITHM

//ASYNC AWAITCALL FUNCTION

// The function should have the following structure:
// Create an async function awaitCall() 
// Inside the awaitCall() function, create a  function to fetchData() Promise that resolves after a 2-second delay
// Use the await keyword to wait for the fetchData() Promise to resolve

// TRY CATCH BLOCK

//  console Log the fetched data inside the try block
// Handle any errors that occur during the API call using a try...catch block
// Log the error message to the console if an error occurs

// CODE
async function awaitCall() {
    // Simulate fetching data from an API with a delay
    function fetchData() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ data: "API data Fetched" });
        }, 2000); // Simulate a 2-second delay for the API call
      });
    }

     
  // TRY CATCH BLOCK
    try {
      // Await the simulated API call
      const response = await fetchData();
      // Log the fetched data
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  
  awaitCall();