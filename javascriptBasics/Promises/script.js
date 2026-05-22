async function getData(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 3) {
        reject("Query Not Found");
      } else {
        console.log("Data Sent", value);
        resolve("Query Solved");
      }
    }, 2000);
  });
}





await getData(1)
await getData(2)
await getData(3)
await getData(4)
await getData(5)