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
  const recipeById = recipes.find(({ id }) => id === requestId);
  if (recipeById) {
    return recipeById;
  }
}

// CREATE A RECIPE
export async function createRecipe(recipe) {
  recipes.push(recipe);
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id) {

    const newRecipe = recipes.find(({ id }) => id === newId);

  if (recipeByID) {
    recipes.push({});
    let recipeByID = id;
  }
  return newRecipe;
}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {
  recipes.splice(id);
  return recipes;
}
