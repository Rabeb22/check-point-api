import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { BiChevronsRight } from "react-icons/bi";

import RecipeDetails from '../recipeDetails/RecipeDetails';

 import './Detail.css'
 import '../../App.css'

const Detail = () => {
  
  const recipes =useSelector(state=>state.recipes)
  const params=useParams()
  const recipe=recipes.find(el=>recipes.indexOf(el)===Number(params.id))
  const { label, image, url, dishType,ingredients  } = recipe.recipe;
    
  return (

    <div className="ui grid container">
    {recipe.length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div>
      <div className='entete '>
     <ul>
       <li>
         <Link to = "/" >
           <AiFillHome size = {22} style={{textDecoration:'none',color:'white'}} />
         </Link>
       </li>
       <li className=' mx-1'>
         <BiChevronsRight size = {23} />
       </li>
       <li >
         <span to = "" className='fs-15 fw-5 text-uppercase'>{label}</span>
       </li>
     </ul>
   </div>

   <div className='categories' style={{marginLeft:0}}>
      <h2 > Meal details</h2></div>

      <div className="detail">
     
               <img
                 className="img"
                 src= {image}
                 alt=""
               />
               
               
               <div style={{marginTop:50}} className="detail2">
              
        <h3 className='title '>{label}</h3>
        <div className='py-4'>
          <div className='category'>
            <span className='cat'>Type: &nbsp;</span>
            <span className='text-uppercase'>{ dishType }</span>
          </div>

          <div className='category'>
          
            <span className='cat text-uppercase'>Source: &nbsp;</span>
           
            <a href={url}>
            {url ? url.substring(0, 40) + "..." : "Not found" }
            </a>
            
          </div>
        </div>

               <h4 >Ingredients</h4>
                <RecipeDetails ingredients ={ingredients }/>
                 </div>                 
                 </div>
                 </div>
    )}
  </div>
)
}
export default Detail;
