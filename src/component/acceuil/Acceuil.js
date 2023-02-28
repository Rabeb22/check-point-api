import React, { useEffect } from 'react';
import '../../App.css';



import Loading from "../loading/Loading"

import ListRecipe from '../listRecipe/ListRecipe';

import ListCategories from '../listCategories/ListCategories';

import { useSelector } from 'react-redux';



const Acceuil = () => {
  const {loading1,loading2}=useSelector(state=>state)
      return (
      
   
     <div style={{justifyContent:'center'}}>
     {(!loading1 )?(
        <ListRecipe/>)
      :
      
      null}
     {loading2?(
     <Loading/>)
      :
      <ListCategories/>}
      

      </div>
      
  );
}
 


export default Acceuil;
