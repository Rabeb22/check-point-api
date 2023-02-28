import React from 'react';
import {  useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import Recipe from "../recipe/Recipe";

const ListRecipe = () => {
    const recipes =useSelector(state=>state.recipes)
 
// console.log('recipes: ',recipes)

  return (
    <div className='categories'>
      <h2> Meals</h2>
      <div className="recipes">

        {recipes !== [] &&
          recipes.map(recipe=> <Recipe key={uuidv4()} recipe={recipe} />)}
          {/* recipes.map((recipe,i) => <Recipe key={i} recipe={recipe} />)} */}
      </div>
      </div>
      
      
  
  );
}

export default ListRecipe;

