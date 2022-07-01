import React from 'react';
import '../../App.css';
import ViewSection from '../ViewSection';

export default function Aboutus() {
  return (
    <>
      <ViewSection 
        src='/videos/video-5.mp4'
        title='ABOUT US'
        caption = 'WE SIMPLIFIED BUSINESS! INNOVATION TECHNOLOGY SOLUTIONS!!!'
        btn1 = {false}
        btn1name = "LET'S GO"
        btn2 = {false}
        btn2name = 'Request for Quotation'
      />
      {/* <h1 className='products'>PRODUCTS  </h1> */}
    </>
  );
}
