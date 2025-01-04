const dataOutput = document.querySelector(".dataOutput");

// * Async function to fetch the data from our API
async function getData() {
  // * fetch request to obtain the data from API endpoint
  const response = await fetch(
    "https://hp-api.onrender.com/api/characters/students"
  );
  // * Parsing the responce into a workable format
  const apiData = await response.json();
  // * Return the response in object format
  return apiData;
}

async function fetchAndDisplayData() {
  // * Implement try/catch for error handling
  try {
    // * try to fetch the data using the getData function
    const apiData = await getData();
    // * Log the response
    console.log(apiData);
    // * Loop over the api response and create elements for each character
    for (character of apiData) {
      let nameOutput = document.createElement("p");
      let characterImage = document.createElement("img");
      characterImage.setAttribute("src", character.image);
      nameOutput.textContent = character.name;
      dataOutput.append(nameOutput, characterImage);
    }
  } catch (error) {
    // * If an error occurs provide error information
    console.error(error);
    // * Log a message informing us of the error
    console.log("An error occurred. Please try again.");
  }
}

// * Wait until our page has loaded into the browser before fetching the data
document.addEventListener("DOMContentLoaded", fetchAndDisplayData);
