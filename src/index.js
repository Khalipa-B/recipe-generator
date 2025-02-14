function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f345f9a89aa0t644b29b2bab3o1f7fd0";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let context =
    "You are a professional well travelled chef and you are an expert in recipe and culinary arts. Your mission is to generate recipes in basic HTML. Do not include ```html. Make sure to follow the user instructions exactly. Sign the recipe with SheCodes AI inside a <strong></strong> element at the end of the recipe and NOT at the beginning of the poem";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class = "generating"> Generating a poem about ${instructionsInput.value}</div>`;
  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
