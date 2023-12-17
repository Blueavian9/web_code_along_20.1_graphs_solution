// Driver Task
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = "Async data";
      // Resolve the promise with the data
      resolve(data);
      // Uncomment the following line to simulate a rejection
      // reject("Error fetching data");
    }, 2000);
  });
}

// Using the promise
fetchData()
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
