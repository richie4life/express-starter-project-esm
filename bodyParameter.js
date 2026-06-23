// Get the data that just came back from Spoonacular
// Get the data that just came back from Spoonacular
let data = res.getBody();

if (data && data.results) {
  const allowedNutrients = ["Calories", "Fat", "Protein", "Net Carbs"];
  
  // Map through results to strip out unwanted properties and arrays
  data.results = data.results.map(recipe => {
    
    // 1. Filter down the nutrients array to only our 4 macros
    if (recipe.nutrition && recipe.nutrition.nutrients) {
      recipe.nutrition.nutrients = recipe.nutrition.nutrients.filter(n => 
        allowedNutrients.includes(n.name)
      );
      
      // 2. DELETE the extra nutrient-related arrays you don't want (flavonoids, properties, etc.)
      delete recipe.nutrition.properties;
      delete recipe.nutrition.flavonoids;
      delete recipe.nutrition.caloricBreakdown;
      delete recipe.nutrition.weightPerServing;
      delete recipe.nutrition.ingredients;
      delete recipe.summary;
      delete recipe.cuisines;
      delete recipe.dishTypes;
      delete recipe.diets;
      delete recipe.occasions;
      delete recipe.language;
      delete recipe.spoonacularScore;
    }
    
    // 3. Inject your custom UI fields to match your target format
    recipe.diet = "keto";
//     recipe.color = "green";
//     recipe.hexColor = "#00FF00";
    
    return recipe;
  });

  // Overwrite Bruno's display pane with the clean data
  res.setBody(data);
}