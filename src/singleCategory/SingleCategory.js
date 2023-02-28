
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListRecipe from '../component/listRecipe/ListRecipe';
import Loading from "../component/loading/Loading"
import { fetchRecipes } from '../reducer/action';

const SingleCategory = () => {
    const {loading1}=useSelector(state=>state)

    const categories =useSelector(state=>state.categories)
  const params=useParams()
  const categori=categories.find(el=>el.strCategory===params.id)
  // console.log('CAT: ',categori.strCategory)
  const q=categori.strCategory
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchRecipes(q));
  }, [])
  return (
    <div>
    
      <div style={{justifyContent:'center'}}>
      {loading1?(
        <Loading/>)
      :
      <ListRecipe/>}
      </div>

    </div>
  );
}

export default SingleCategory;
