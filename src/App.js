import React from 'react';
 import './App.css';
 import {Route,Switch} from 'react-router-dom';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Testimonials from './components/Testimonials';



 function App() {
  return (
    <>
    
    <Header />
     <Section2 />
     <Section3 />
     <Section4 />
     <Testimonials />
     <Section6 />
     <Section7 />

     
    </>
  );
}

export default App;
