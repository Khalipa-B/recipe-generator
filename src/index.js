function generateRecipe(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "A short recipe...";
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
