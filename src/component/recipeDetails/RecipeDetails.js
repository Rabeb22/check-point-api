import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ ingredients }) => {
  return ingredients.map(ingredient => {
    return (
      <div key={uuidv4()} className="ingredient-list" >
        <p className="ingredient-text">{ingredient.text}</p>
        <p className="ingredient-weight">Weight - {ingredient.weight}</p>
      </div>
    );
  });
};

export default RecipeDetails;
