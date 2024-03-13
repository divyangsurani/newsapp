import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import About from './components/About';

const App = ()=>  {
 const pageSize = 9;
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
  
  

    return (
      <div>
        <Router>
     <Navbar/> 
     <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Routes >
          
          <Route exact path="/business"element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route exact path="/entertainment"element={<News setProgress={setProgress} apikey={apikey}  key="entertainment"pageSize={pageSize} country="in" category="entertainment"/>} />
          <Route exact path="/general"element={<News setProgress={setProgress}  apikey={apikey} key="general"pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path="/Health"element={<News setProgress={setProgress}  apikey={apikey} key="Health"pageSize={pageSize} country="in" category="Health"/>} />
          <Route exact path="/science"element={<News setProgress={setProgress} apikey={apikey}  key="science "pageSize={pageSize} country="in" category="science "/>} />
          <Route exact path="/sports"element={<News setProgress={setProgress}  apikey={apikey} key="sports"pageSize={pageSize} country="in" category="sports"/>} />
          <Route exact path="/Technology"element={<News setProgress={setProgress}apikey={apikey}  key="Technology" pageSize={pageSize} country="in" category="Technology"/>} />
          <Route exact path="/Contactus" element={<Contactus/>} />
          <Route exact path="/About" element={<About/>} />
        </Routes>
         <Footer/>
     </Router>
      </div>
    )
  }

export default App;