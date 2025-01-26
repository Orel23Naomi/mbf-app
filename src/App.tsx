import React from 'react';
import logo from './logo.svg';
import './App.css';
import StickyHeader from './components/StickyHeader';
import TransformYourHome from './components/TransformYourHome';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import MaintenanceSchedule from './components/MaintenanceSchedule';
import RequestQuoteForm from './components/RequestQuoteForm';
import CustomFooter from './components/CustomFooter';

function App() {
  return (
    <div className="App">
     <StickyHeader/>
     <div className='main-content'>
      <TransformYourHome></TransformYourHome>
      <AboutUs></AboutUs>
      <RequestQuoteForm></RequestQuoteForm>
      <OurServices></OurServices>
      <MaintenanceSchedule></MaintenanceSchedule>
      <CustomFooter></CustomFooter>
     </div>
    </div>
  );
}

export default App;
