import { data } from "./recipes";

export async function seedRecipes() {
  const recipes = await (await fetch("https://restapi.fr/api/recipes")).json();

  if (recipes.length < 20) {
    await fetch("https://restapi.fr/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}
