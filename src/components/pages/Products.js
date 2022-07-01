import React from 'react';
import '../../App.css';
import ViewSection from '../ViewSection';

export default function Products() {
  return(
    <>
      <ViewSection 
        src='/videos/video-1.mp4'
        title='PRODUCTS'
        caption = 'BUSINESS IT SOLUTIONS IS OUR EXPERTISE'
        btn1 = {false}
        btn1name = 'GET STARTED'
        btn2 = {false}
        btn2name = 'Request for Quotation'
      />
      {/* <h1 className='products'>PRODUCTS  </h1> */}
    </>
  );
}
