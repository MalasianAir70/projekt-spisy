const APP_ID = 'c3158908';
const APP_KEY = '9a730a05087af85830d7ddb889982343';

export const fetchRecipes = async (query) => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  return data.hits;
};
