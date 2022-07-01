import React from 'react';
import '../../App.css';
import ViewSection from '../ViewSection';

export default function Services() {
  return (
    <>
      <ViewSection 
        src='/videos/video-3.mp4'
        title='SERVICES'
        caption = 'TECHNICAL SERVICES IS OUR EXPERTISE!'
        btn1 = {true}
        btn1name = "LET'S GO"
        btn2 = {false}
        btn2name = 'Request for Quotation'
      />
      {/* <h1 className='products'>PRODUCTS  </h1> */}
    </>
  );
}
