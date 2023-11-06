import react, {useState} from 'react';
import './index.css';
import user_icon from './person.png'
import email_icon  from './email.png'
import password_icon  from './password.png'


const SignupLogin =()=> {

  
  const[action,setAction] = useState("Login");
    return(
      
       <div className='signcontainer1'>
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
            
          </ul>
      </nav>
        <div className='colorofpage'>
         <div className='signheader'>
           <div className='signtext'>{action}</div> 
         </div>

         <div className='inputs'>
          {action ==="Login"?<div></div>:  <div className='input'>
            <img
            src={user_icon}
            />
            < input type='text'  placeholder='Name'/>
          </div>}
         

          <div className='input'>
            <img
            src={email_icon}
            />
            <input type='email' placeholder='Email'/>
          </div>

          <div className='input'>
            <img
            src={password_icon}
            />
            <input type='password' placeholder='Password' />
          </div>
         </div>
         <div className='submitcontainer'>
          <div className={action==="Login"? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign UP"? "submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

          

         </div>
       </div>
       </div>
    );
}
export default SignupLogin;