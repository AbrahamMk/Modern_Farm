import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {

  return (
    <div className="content">
        <div className="header">
          <h1>Modern Farm</h1>
          <div className='logo'>
          <img src="https://th.bing.com/th/id/R.3b186fe91c7ed8475c58add5594ae8f9?rik=j%2bzkARBvQjq8Tw&pid=ImgRaw&r=0"
          alt=""
           />
          </div>s
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
      
       

        

        <div className="body">
          <div className='column'>
          <h2>Modern Ways of Farming is here!</h2>

          <div className='homeunderline'></div>
          </div>
          </div>
          <p>
            < div className='crop1'>
        <img
        src="https://th.bing.com/th/id/R.ee893df361f669011d589d3c630c1ad9?rik=4QuKEol%2fEaw3xw&pid=ImgRaw&r=0"
        alt=""
        />
      </div>
      <div className="discription">
        <p>
            <br></br>Agriculture is the backbone of Ethiopia's economy, 
        accounting for over 40% of GDP, 80% of total employment,
         and 90% of total exports. Ethiopia has over 100 million
          hectares of agricultural land, and relies heavily on traditional
           farming techniques, with over 95% of farming conducted at 
           subsistence level on small plots of land using hand tools like
            the ox-drawn plough. However, major crops include cereals like 
            teff, wheat, barley; pulses like chickpeas and lentils;
             oilseeds like niger seed and linseed; coffee is the largest 
             foreign exchange earner; livestock rearing is an important activity 
             with goats, sheep, cattle, poultry, camels, and donkeys raised; cash
              crops are expanding including fruits, vegetables, flowers for export. 
              The government has prioritized modernizing agriculture through better
               seeds and fertilizers, irrigation expansion, access to credit and
                rural institutions, with a goal of achieving lower poverty rates
                 through commercialization and making Ethiopia a middle income 
                 country by 2025.

                
        </p>
      </div>

    <div className="farmblog">  
         <div className='blogtitle'>

      <h2>Farm Blogs</h2>
         </div >
      <div className="blog-container">

        <div className="blog-1-container">

         <div class='blog-1'>
          <Link to="FarmBlog">
          <img
          src="https://th.bing.com/th/id/R.cd0db94723f921dee9302ebe13d43de6?rik=9tV8KQIrbGRSOg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-EQK2Uyb-O4w%2fTYbwwb51YnI%2fAAAAAAAAAZ4%2ff8NRrFdUt9I%2fs1600%2fP1000468.JPG&ehk=CeltXI0w3%2fydjYKc7eOPz4TI7Bw77HI2rv%2f8EPLw9xo%3d&risl=&pid=ImgRaw&r=0"
          />
          </Link>
          
         </div>
         <Link to="FarmBlog"><h6> Enset in Ethiopia</h6></Link>
         
         </div>

         
      <div className="blog-2-container">
        <div class='blog-2'>
          <Link to="FarmBlog">
          <img
          src="https://omnoms.ae/wp-content/uploads/photo-gallery/Gursha-Iftar-Food-04.JPG" 
  
          />
          </Link>
          <Link to="FarmBlog"><h6> Making Injera</h6></Link>
          
         </div>

        </div>
        
      <div className="blog-3-container"> 
        <div class='blog-3'>
          <Link to="FarmBlog">
          <img
          src="https://th.bing.com/th/id/R.b890b7940bf5a7a0a025d437b693e61e?rik=E4mWqXczQyDX5Q&pid=ImgRaw&r=0 "  
          />
          </Link>
          <Link to="FarmBlog"><h6>Ethiopian Coffee</h6></Link>
         
         </div>
        </div>
        

         </div> 

      <div className='bottomdash'>
          <ul>
            <il> Modern Farm 2023</il>
          </ul>
      </div>

      </div>

          </p>
        
    </div>
  );
};

export default HomePage;