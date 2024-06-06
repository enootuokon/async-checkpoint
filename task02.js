//Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. 
//Use await to wait for the API response and then log the data.

//ALGORITHM

//ASYNC AWAITCALL FUNCTION

// The function should have the following structure:
// Create an async function awaitCall() 
// Inside the awaitCall() function, create a  function to fetchData() Promise that resolves after a 2-second delay
// Use the await keyword to wait for the fetchData() Promise to resolve





async function awaitCall() {
    // Simulate fetching data from an API with a delay
    function fetchData() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ data: "API data Fetched" });
        }, 2000); // Simulate a 2-second delay for the API call
      });
    }

     // Await the simulated API call
     const response = await fetchData();
     // Log the fetched data
     console.log(response.data);
  // TRY CATCH BLOCK
  
  }
  
  
  awaitCall();