import axios from 'axios';


export default {

    addRecipesFromAPIToDatabase(newRecipes) {
        return axios.post('/recipes', newRecipes);
    },

    getAllRecipes() {
        return axios.get('/recipes');
    },

    getRandomRecipesFromSpoonacular() {
        return axios.get('https://api.spoonacular.com/recipes/random?number=10&apiKey=941ba16793664284808b0c07b47ed70f');
    },
    
    getAllRecipesFromSpoonacular() {
        return axios.get('https://api.spoonacular.com/recipes/complexSearch?query=dinner&addRecipeInformation=true&apiKey=941ba16793664284808b0c07b47ed70f');
    },

    getAllUserRecipes(userID) {
        return axios.get(`/users/${userID}/recipes`);
    },

    getRecipeById(recipeID) {
        return axios.get(`/recipes/${recipeID}`);
    },

    addRecipeToUserLibrary(userID, recipeID) {
        return axios.post(`/users/${userID}/recipes/${recipeID}`);
    }

}