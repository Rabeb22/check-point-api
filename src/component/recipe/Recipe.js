import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Recipe = ({ recipe,key }) => {
  const navigate = useNavigate();
  const recipes =useSelector(state=>state.recipes)
  
  const { label, image } = recipe.recipe;

  return (
    <div className="recipe">
      <h4>{label}</h4>
      
      <img src={image} alt={label} width={250} height={200}/>
      
      
      <button onClick={()=> navigate(`/carte/${recipes.indexOf(recipe)}`)}>details</button>
      
    </div>
  );
};

export default Recipe;
