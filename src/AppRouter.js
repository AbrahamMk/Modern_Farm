import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Crops from './Crops';
import Questions from './Questions';
import SignupLogin from './SignupLogin';
import FarmBlog from './FarmBlog';
import Enset from './Enset';
import Injera from './Injera';
import Buna from './Buna'; 

import Teff from './Teff';
import Barley from './Barley';
import Coffee from './Coffee';
import Maize from './Maize';
import Sugarcane from './Sugarcane';
import Wheat from './Wheat';
import Avocado from './Avocado';
import Apple from './Apple';
import Banana from './Banana';



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/crops" element={<Crops />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/SignupLogin" element={<SignupLogin/>} />
        <Route path="/FarmBlog" element={<FarmBlog/>} />
        <Route path="/Teff" element={<Teff/>} />
        <Route path="/Barley" element={<Barley/>} />
        <Route path='/Enset' element={<Enset/>} />
        <Route path="/Injera" element={<Injera />} />
        <Route path='/Buna' element={<Buna/>} />

        <Route path="/Coffee" element={<Coffee/>} />
        <Route path="/Maize" element={<Maize/>} />
        <Route path="/Sugarcane" element={<Sugarcane/>} />
        <Route path="/Wheat" element={<Wheat/>} />
        <Route path="/Avocado" element={<Avocado/>} />
        <Route path="/Apple" element={<Apple/>} />
        <Route path="/Banana" element={<Banana/>} />

      </Routes>
    </Router>
  );
};


export default AppRouter;

