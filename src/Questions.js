import React from "react";
import {Link} from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


const Questions = ()=> {

    return(
<div className="content">
   
     <div className="header">
          <h1>Moder Farm</h1>
          <div className='logo'>
          <img src="https://th.bing.com/th/id/R.3b186fe91c7ed8475c58add5594ae8f9?rik=j%2bzkARBvQjq8Tw&pid=ImgRaw&r=0"
          alt=""
           />
          </div>
        </div>
    
      <nav className="navbar">
          <ul>
          <li className={window.location.pathname === '/' ? 'active': ''}><a href="./">Home </a></li>
            <li className={window.location.pathname === '/FarmBlog' ? 'active': ''}><a href="./FarmBlog">Farm Blog </a></li>
            <li className={window.location.pathname === '/Crops' ? 'active': ''}><a href="./Crops"> Crops</a></li>
            <li className={window.location.pathname === '/Questions' ? 'active': ''}><a href="./Questions"> Ask</a></li>
            <li className={window.location.pathname === '/SignupLogin' ? 'active': ''}><a href="./SignupLogin"> Signup/Login</a></li>
            
          <search className="searchbar">
           
            <input type="text"/>
            <button4>Search</button4>
            
          </search>
          </ul>
         
         
      </nav>

  <form>
    <div className="blocket">
    <div className="frequently_asked">
      <ul>FAQs</ul>
      <li>What is Teff?</li>
      <li>How do you make Injera from Teff?</li>
      <li>Is Teff gluten free?</li>
      </div>

      <div className="message">
         <input type="text"  ></input>
         <button type="submit"> Submit </button>
      </div>
      

      
    </div>
    </form>
</div>
    )
}
export default Questions;
