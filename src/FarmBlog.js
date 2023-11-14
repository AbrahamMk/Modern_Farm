import React from 'react';
import { Link } from 'react-router-dom';

const farmblogs = () => {
  return (
    
    <div className="farm-blog-header">
      <div className="header">
          <h1>Modern Farm</h1>
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
      <h2>Farm Blogs</h2>
        <div className="farm-blog-container">
                

        <div className="farm-blog-3">
            <Link to="/Buna">
          <img
          src="https://th.bing.com/th/id/R.b890b7940bf5a7a0a025d437b693e61e?rik=E4mWqXczQyDX5Q&pid=ImgRaw&r=0 "  
          />
          </Link>
          </div>
          <p className='blog-3-description'> <h3 >Ethiopian Coffee: The Rich Heritage and Cultural Significance of a Beloved Brew </h3>  <br/> 
            

          Introduction:<br/> 
Ethiopia is often hailed as the birthplace of coffee, and the country's coffee culture is deeply woven into its history, traditions, and identity. Ethiopian coffee holds a special place in the hearts of coffee enthusiasts worldwide, renowned for its exceptional quality, diverse flavors, and unique brewing methods. Let's explore the rich heritage and cultural significance of Ethiopian coffee.
<br/> 
        
       <Link to="/Buna">Read More</Link>
 </p>


          <div className="farm-blog-1">
            <Link to="/Enset">
            <img
            src="https://th.bing.com/th/id/R.cd0db94723f921dee9302ebe13d43de6?rik=9tV8KQIrbGRSOg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-EQK2Uyb-O4w%2fTYbwwb51YnI%2fAAAAAAAAAZ4%2ff8NRrFdUt9I%2fs1600%2fP1000468.JPG&ehk=CeltXI0w3%2fydjYKc7eOPz4TI7Bw77HI2rv%2f8EPLw9xo%3d&risl=&pid=ImgRaw&r=0"
            />
            </Link>
          </div>

          <p className='blog-1-description'> <h3>Enset:The Vital Crop Sustaining Communities in Ethiopia</h3>  <br/> 
Introduction:<br/>
Enset (Ensete ventricosum) is a remarkable crop deeply rooted in the culture and livelihoods of communities in Ethiopia. Often referred to as the "false banana," enset is a perennial plant that plays a crucial role in providing food security, income generation, and environmental sustainability. This article explores the significance of enset in Ethiopia, its cultivation methods, and its impact on local communities.
         <br/><Link to="Enset">Read More</Link>
 </p>

          <div className="farm-blog-2">
            <Link to="/Injera">
          <img
          src="https://omnoms.ae/wp-content/uploads/photo-gallery/Gursha-Iftar-Food-04.JPG" />

          </Link> 
          </div>
          <p className='blog-2-description'> <h3 >Exploring the Delights of Ethiopian Injera: A Staple Bread with a Unique Twist</h3>  <br/> 
          
          Introduction:<br/>
Ethiopian cuisine is renowned for its rich flavors, diverse spices, and unique dishes. Among the many delights that Ethiopian cuisine offers, injera stands out as a staple bread that holds a special place in the hearts and palates of Ethiopians. Injera, a sourdough flatbread, not only serves as a versatile accompaniment to various stews but also plays a significant role in Ethiopian culture and communal dining experiences.
       <br/> <Link to="Enset">Read More</Link>
 </p>

          
  

        </div>
      




    </div>
  );
};

export default farmblogs;
