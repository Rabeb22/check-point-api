import React, { useEffect } from 'react';
import '../../App.css';
import './Header.css';

import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchcategories, fetchRecipes} from '../../reducer/action';
import Alert from "../alert/Alert";


const Header = () => {
    const [query, setQuery] = useState("");
  const [alert, setAlert] = useState("");


  const dispatch=useDispatch()


  const onChange = (e) => 
  {setQuery(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
   if (query!=="" ){
    dispatch(fetchRecipes(query))
      
      setAlert("");
   }else{
      if (query==="") setAlert("Please fill the form");
    }
  };
 
  useEffect(() => {
   
    dispatch(fetchcategories())
    
  }, [])
  return (
    <div className="App header-content flex align-center justify-center flex-column text-center">
    
    <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Food Searching App
      </motion.h1>
      <form onSubmit={onSubmit} >
        {alert !== "" && <Alert alert={alert} />}
        <input className='form-control-input'
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
        />
       
        <button 
        
         type = "submit" className='form-submit-btn '>
        <BsSearch  size = {20} />
      </button>
      
      </form>
    
    </div>
  );
}
 


export default Header;
