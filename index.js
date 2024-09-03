var fetchedData = [];
async function processData(url) {
  try {
    const res = await fetch(url);
    fetchedData = await res.json();
    
   console.log(Title)
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
processData("https://fakestoreapi.com/products");
