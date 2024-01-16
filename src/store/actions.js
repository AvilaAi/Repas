import axiosClient from '../axiosClient';

export const searchMeals = async ({commit},keyword) => {
    const {data} = await axiosClient.get(`/search.php?s=${keyword}`);
    commit('setSearchedMeals',data.meals)
  };
  
  export const searchMealsByLetter = async ({commit},letter) => {
    const {data} = await axiosClient.get(`/search.php?f=${letter}`);
    commit('setMealsByLeter',data.meals)
  };

  export const searchMealsByIngredient = async ({commit},ing) => {
    const {data} = await axiosClient.get(`/filter.php?i=${ing}`);
    commit('setMealsByIngredients',data.meals)
  };