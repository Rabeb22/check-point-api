
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acceuil from "./component/acceuil/Acceuil";
import Detail from "./component/detail/Detail";
import Header from "./component/header/Header";
import SingleCategory from "./singleCategory/SingleCategory";



function App() {
  
 
  return (
    <div className="App">
   
    <BrowserRouter>
    <Header/>
    <Routes>
          <Route path="/" element={<Acceuil />}/>
          <Route path="/carte/:id" element={<Detail />}/>
          <Route path="/category/:id" element={<SingleCategory />}/>
          
      </Routes>

    </BrowserRouter>
     
    </div>
  );
}

export default App;
