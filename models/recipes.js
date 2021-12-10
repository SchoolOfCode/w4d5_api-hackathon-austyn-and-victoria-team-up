import recipes from "../data/recipes.js";

// getRecipeByID should return the particular recipe we are looking for
// createRecipe should add a recipe to the collection and return the new recipe
// updateRecipeByID should replace the recipe at a certain ID with an updated version and return the new recipe
// deleteRecipeByID should remove the specific recipe from the collection, and return the deleted recipe

// GET ALL RECIPES
// getRecipes should return an array of all recipes
export async function getRecipes() {
  return recipes;
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {
 const recipeById = recipes.find(({ id }) => id === id);
  if (recipeById) {
    return recipeById;
  }
}

// CREATE A RECIPE
export async function createRecipe(recipe) {
  recipes.push(recipe);
  return recipes[recipes.length - 1];
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updates) {
  //take in the id, take in an updated recipe
  //find the recipe with the id matching what we were given.
  //replace that recipe with the updates
  //return new recipe
  const foundIndex = recipes.findIndex(function (recipe) {
    return recipe.id === id;
  });
  recipes[foundIndex] = updates;
  return recipes[foundIndex];
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {
  //take an item with that id
  //find that item from the array
  const foundIndex = recipes.findIndex(function (recipe) {
    return recipe.id === id;
  });
  const item = recipes[foundIndex]
  //remove it from array
  //return that removed item
  recipes.splice(foundIndex, 1);
  return item;
}
