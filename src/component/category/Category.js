
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Category = ({ category }) => {
  
  const { strCategory, strCategoryThumb} = category;

  return (
    <div>
    <Link to ={`/category/${strCategory}`}>
    <div className="recipe" style={{width:'25rem' ,margin:'1rem'}}>
      <h3>{strCategory}</h3>
      <motion.div  
      whileHover={{ scale: 0.8 }}
       whileTap={{ scale: 0.8 }}>
      <img src={strCategoryThumb} alt={strCategory} width={230} height={150}/>
      </motion.div>
     
    </div>
    </Link>
    </div>
  );
};

export default Category;
