import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Crops from './Crops';
import Questions from './Questions';
import SignupLogin from './SignupLogin';
import TeffPage from './TeffPage';
import FarmBlog from './FarmBlog';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/crops" element={<Crops />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/SignupLogin" element={<SignupLogin/>} />
        <Route path="/TeffPape" element={<TeffPage/>} />     
        <Route path="/FarmBlog" element={<FarmBlog/>} />
      </Routes>
    </Router>
  );
};


export default AppRouter;

