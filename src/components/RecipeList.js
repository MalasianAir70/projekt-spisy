import React from 'react';
import RecipeItem from './RecipeItem';
import { Grid } from '@mui/material';

const RecipeList = ({ recipes, onSelect }) => (
  <Grid container spacing={1}>
    {recipes.map((recipe) => (
      <Grid item xs={12} sm={6} md={6} lg={3} key={recipe.recipe.uri}>
        <RecipeItem recipe={recipe} onSelect={onSelect} />
      </Grid>
    ))}
  </Grid>
);

export default RecipeList;
