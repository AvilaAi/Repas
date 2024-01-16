export const setSearchedMeals=(state,meals)=>{
    state.searchedMeals=meals;
};
export const setMealsByLeter=(state,meals)=>{
    state.mealsByLetter=meals;
};

export const setMealsByIngredients=(state,meals)=>{
    state.mealsByIngredient=meals;
};
export function setIngredient(state, ingredient) {
    state.ingredient = ingredient
  }
