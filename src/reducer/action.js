import axios from "axios";
import { FETCATEGORY, FETCHR } from "./actionTypes";

const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const trimStart = 0;
  const trimEnd = 30;
  
  
export const fetchRecipes=(q)=>async  (dispatch)=>{
    const url = `https://api.edamam.com/search?q=${q}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${trimStart}&to=${trimEnd}`;

    try{
        const response=await axios.get(url);
        dispatch({
            type:FETCHR,
            payload:response.data.hits 
        })
         console.log('TABLEAU: ',response.data.hits)
    }catch(error){
        console.log(error)

    }
    }

    export const fetchcategories=()=>async  (dispatch)=>{
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    
        try{
            const response=await axios.get(url);
            dispatch({
                type:FETCATEGORY,
                payload:response.data.categories
            })
            console.log('RESULT: ',response.data.categories)
        }catch(error){
            console.log(error)
    
        }
        }

   

    






