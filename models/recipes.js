import recipes from "../data/recipes.js";

// getRecipeByID should return the particular recipe we are looking for
// createRecipe should add a recipe to the collection and return the new recipe
// updateRecipeByID should replace the recipe at a certain ID with an updated version and return the new recipe
// deleteRecipeByID should remove the specific recipe from the collection, and return the deleted recipe

// GET ALL RECIPES
// getRecipes should return an array of all recipes
export function getRecipes() {
  return recipes;
}

// GET A RECIPE BY ID
export function getRecipeByID(id) {
  const recipeById = recipes.find(({ id }) => id === requestId);
  if (recipeById) {
    return recipeById;
  }
}

// CREATE A RECIPE
export function createRecipe(recipe) {
  recipes.push(recipe);
}

// UPDATE A RECIPE BY ID
export function updateRecipeByID(id, updates) {

    //take in the id, take in an updated recipe
    //find the recipe with the id matching what we were given.
    //replace that recipe with the updates
    //return new recipe
  const foundIndex = recipes.findIndex(function (recipe) {
      return recipe.id===id;
  });
  recipes[index]=updates;
  return recipes[index];
};


// DELETE A RECIPE BY ID
export function deleteRecipeByID(id) {
    //take an item with that id
    //find that item from the array
    const foundIndex = recipes.findIndex(function (recipe) {
        return recipe.id===id;
    });
    //remove it from array
    //return that removed item
  recipes.splice(foundIndex, 1);
  return item;
}
