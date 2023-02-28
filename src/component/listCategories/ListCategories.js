import React from 'react';
import {  useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import Category from '../category/Category';



const ListCategories = () => {
    const categories =useSelector(state=>state.categories)
 
// console.log('recipes: ',recipes)

  return (
    <div className='categories' style={{marginTop:30}}>
      <h2> Categories</h2>
      <div className="recipes">
      
        {categories !== [] &&
          categories.map(category=> <Category key={uuidv4()} category={category} />)}
          {/* recipes.map((recipe,i) => <Recipe key={i} recipe={recipe} />)} */}
      </div>
      </div>
      
      
  
  );
}

export default ListCategories;

