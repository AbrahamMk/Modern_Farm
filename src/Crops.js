import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import React, { useState} from "react"; 

const Crops = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCrops, setFilteredCrops] = useState([]);
    return (
<div>
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
           
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button4>Search</button4>
          </search>
          </ul>
         
          
      </nav>
             <div className="p"> Crops and Fruits Of Ethiopia </div>
          
             

          <body>
            
     <div className="grid-container">
            <div className="teff">

               <Link to="/Teff">
                <img
                    src="https://th.bing.com/th/id/R.68adbd705359ef7988cfacdfef98ef2d?rik=mi90tAYY3EcATQ&riu=http%3a%2f%2famerica.aljazeera.com%2fcontent%2fajam%2farticles%2f2015%2f4%2f25%2fglobal-craving-ethiopian-grain%2fjcr%3acontent%2fmainpar%2ftextimage%2fimage.adapt.990.high.teff_ethiopia_teff_hands.1429917508440.jpg&ehk=qW0BN9GDHPyz%2by9RgokLsyxWxQA0zchqVkZjx5pttow%3d&risl=&pid=ImgRaw&r=0"
                    alt="block1"
                    />
                  </Link>  
                    
                    <div className="teffdescription">  Teff  </div>
                    

            </div>   

            <div className="barley">
             <Link to="/Barley">
                        <img
                        src="https://3.bp.blogspot.com/-fLd6AyAltUQ/Wux8mqbG43I/AAAAAAAAFuU/v4W3qcD1VM0L44ifP9RLdBcbiZorIFI1gCLcBGAs/s1600/9-how-to-cook-unhulled-barley-picture.jpg"
                        alt="block2"
                        />
                  </Link>
              
                        <div className="barleydescription"> Barley  </div>
                      
            </div>
    
            <div className="coffee">
              <Link to="/Coffee">
                        <img
                        src="https://th.bing.com/th/id/R.7839cbf65627e402de57b6d401b44596?rik=SuBP39z%2bT0uOlQ&pid=ImgRaw&r=0"
                        alt=""
                        />
                </Link>
                         <div className="coffeedescription">Coffee </div>
            </div>
                   
            <div className="maize">
              <Link to="/Maize">
                        <img
                          src="https://th.bing.com/th/id/R.5b2691bf55b300aa9546479813baf3a4?rik=fBKDG3b9Un6Lig&pid=ImgRaw&r=0"
                          alt=""
                        />
               </Link>         
                        <div className="maizedescription">Maize</div>
                    
            </div>

           <div className="sugarcane">
           <Link to="/Sugarcane">
                       <img
                       src="https://a-z-animals.com/media/2023/02/shutterstock_718945261-768x513.jpg"
                       alt=""
                       />
            </Link>
                    <div className="sugercanedescription">
                        Sugercane
                    </div>
           </div>
                    
            <div className="wheat">
            <Link to="/Wheat">
                        <img
                        src="https://th.bing.com/th/id/R.ea268bae3bcad71a3f2ae480c8dea332?rik=RORmBamaWomcZA&riu=http%3a%2f%2fgetwellstaywellathome.com%2fblog%2fwp-content%2fuploads%2f2011%2f11%2fwheat.jpg&ehk=GeFm2Ezqosn2AZfcegN98iDUxcGgzj44pTy6Uj4XVT4%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                        />
             </Link>
                        <div className="wheatdescription">
                            Wheat
                        </div>
            </div>

            <div className="Sorghum">
            <Link to="/Crops">
                        <img
                        src="https://th.bing.com/th/id/R.d03fe0b6f686047f411d4154f93b2728?rik=Eif2hKiSstQ2RA&pid=ImgRaw&r=0"
                        />
             </Link>
                        <div className="SorghumDescription">
                            Sorghum
                        </div>
            </div>

            <div className="Chickpea">
            <Link to="/Crops">
                        <img
                        src="https://th.bing.com/th/id/R.c034f1fbb04e5c910596ed63ce36d57e?rik=Bb31v5UItYtCjw&pid=ImgRaw&r=0"
                        />
             </Link>
                        <div className="ChickpeaDescription">
                            Chickpea
                        </div>
            </div>

            <div className="Cotton">
            <Link to="/Crops">
                        <img
                        src="https://th.bing.com/th/id/OIP.KfgEneoD-TqLVLeNEpMf-gHaFZ?pid=ImgDet&rs=1"
                        />
             </Link>
                        <div className="CottonDescription">
                            Cotton
                        </div>
            </div>

            <div className="Avocados">
            <Link to="/Avocado">
                 <img
                 src="https://th.bing.com/th/id/R.7800919eab10dd28dc136c7222fda684?rik=3U5ZGQxweM%2ffdg&pid=ImgRaw&r=0"
                 alt=""
                 />
            </Link>
                 <div className="Avocadosdescription">Avocados</div>
            </div>

            <div className="Apple">
            <Link to="/Apple">
                 <img
                 src="https://th.bing.com/th/id/OIP.8_fKxYCiLlWGCu5GcbeiTwHaEK?pid=ImgDet&rs=1"
                 />
           </Link>
                 <div className="Appledescription">Apple</div>
            </div>
            
            <div className="Banana">
            <Link to="/Banana">
                 <img
                 src="https://th.bing.com/th/id/OIP.GvyghILNEnTQr07cEST2HwAAAA?pid=ImgDet&rs=1"
                 />
           </Link>
                 <div className="Bananadescription"> Banana </div>
            </div>
               
            <div className="Watermelon">
            <Link to="/Crops">
                 <img
                 src='https://th.bing.com/th/id/OIP.tIzyNhtZPhYZNFUnoA0BIQHaEt?pid=ImgDet&rs=1'
                 />
           </Link>
                 <div className="WatermelonDescription"> Watermelon </div>
            </div>
             <div className="Lemon">
            <Link to="/Crops">
                 <img
                 src='https://th.bing.com/th/id/R.f9f00ab1f151d35926b5e8b20d3305fd?rik=DrdafTKriPU9Cw&pid=ImgRaw&r=0' />
           </Link>
                 <div className="LemonDescription"> Lemon </div>
            </div>
            <div className="Orange">
            <Link to="/Crops">
                 <img
                 src='https://th.bing.com/th/id/R.fdfa4be96a39b9cfb21e852b910101f2?rik=VCl57JSAuYF%2fpg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-tVoQ9O2IU_E%2fUDzWrWgr2TI%2fAAAAAAAAIZ8%2fojl3vvQ-XV8%2fs1600%2fOrange%2bFruits%2bWallpapers%2b1.jpg&ehk=SRm6PUUyZ%2f2XJQnkWx9o7XofkTwa8zcmVr0ytJXlHEg%3d&risl=&pid=ImgRaw&r=0' />
           </Link>
                 <div className="OrangeDescription"> Orange </div>
            </div>
    </div>

        </body>

</div>
          
    );


}

export default Crops;
