import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';


const HomePage = () => {

  return (
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
      <div className="crop1discription">
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
      </div>
      <h3>Title: Harvesting Green: Cultivating Sustainable Agriculture for a Brighter Future </h3>
      <article>
        <div className="blog-img">

         <Link to="./FarmBlog" > 

         <img 
         src='https://th.bing.com/th/id/R.dcf19951e7ba9ffe8aed4e8e278f0924?rik=gtgefWOPEIMITw&pid=ImgRaw&r=0'
         alt='blog_image' 
         /> 

         </Link>
         
         </div>

        Introduction:<br/>
        Welcome to "Harvesting Green," a blog dedicated to exploring sustainable practices and innovative techniques in the field of agriculture. In this blog, we aim to provide valuable insights, practical tips, and thought-provoking discussions to help farmers, enthusiasts, and anyone interested in the agricultural industry.
<br />
The Importance of Sustainable Agriculture:
In our first blog post, we delve into the significance of sustainable agriculture and why it is crucial for the future of our planet. We discuss the environmental, social, and economic benefits of adopting sustainable practices and highlight success stories from around the world.


     
      </article>
         </div> 

        <div className='bottomdash'>
          <ul>
            <il> Modern Farm 2023</il>
          </ul>
        </div>

          </p>
        
    </div>
  );
};

export default HomePage;