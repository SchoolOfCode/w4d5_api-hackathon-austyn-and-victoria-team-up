import recipes from "../data/recipes.js";


// getRecipeByID should return the particular recipe we are looking for
// createRecipe should add a recipe to the collection and return the new recipe
// updateRecipeByID should replace the recipe at a certain ID with an updated version and return the new recipe
// deleteRecipeByID should remove the specific recipe from the collection, and return the deleted recipe


// GET ALL RECIPES
// getRecipes should return an array of all recipes
export function getRecipes() {
  let allRecipes = recipes;
  return allRecipes;
}

// GET A RECIPE BY ID
export function getRecipeByID(id) {
  let recipesById = recipes;
  const recipeById = recipes.find(({ id }) => id === requestId);
  if (recipeById) {
    return recipeById;

}

// CREATE A RECIPE
export function createRecipe(recipe) {
  let newRecipe = {
    id:
  }
   let allRecipes = recipes;
   allRecipes.push(newRecipe)
}

// UPDATE A RECIPE BY ID
export function updateRecipeByID(id) {}

// DELETE A RECIPE BY ID
export function deleteRecipeByID(id) {}
