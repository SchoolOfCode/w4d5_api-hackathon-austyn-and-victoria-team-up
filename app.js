import express from "express";

import { html } from "./config.js";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "..models/recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.sendFile(html);
});

/** YOUR ROUTES GO HERE */
app.get("/recipes", async function (req, res) {
  const allRecipes = await getRecipes();
  res.json(allRecipes);
});

app.get("/recipes/:id", async function (req, res) {
  const recipeByID = await getRecipeByID();
  res.json(recipeByID);
});

app.post("/recipes", async function (req, res) {
  const newRecipe = req.body;
  newRecipe = await createRecipe();
  res.json(newRecipe);
});

app.patch("/recipes/:id", async function (req, res) {
  const updatedRecipe = await updateRecipeByID(req.params.id, req.body);
  res.json(updatedRecipe);
});

app.delete("/recipes/:id", async function (req, res) {
  const deletedRecipe = await deleteRecipeByID(req.params.id);
  res.json(deletedRecipe);
});

/** END OF YOUR ROUTES */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
