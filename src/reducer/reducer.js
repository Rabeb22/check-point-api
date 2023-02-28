import {  FETCATEGORY, FETCHR } from "./actionTypes";

const intialState = {
  recipes: [],
  categories:[],
  loading1:true,
  loading2:true,
};



export const recipesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    
    
      case FETCHR:
      return { ...state, recipes:payload ,loading1:false};

      case FETCATEGORY:
        return {...state, categories:payload ,loading2:false}

    default:
      return state;
  }
};
