import React from 'react';
import '../../App.css';
import ViewSection from '../ViewSection';

export default function SignUp() {
  return  (
    <>
      <ViewSection 
        src='/videos/video-4.mp4'
        title='ACCOUNT REGISTRATION'
        caption = 'GET YOUR ACCESS TO OUR UNLIMITTED BUSINESS SOLUTIONS'
        btn1 = {false}
        btn1name = "REGISTER"
        btn2 = {false}
        btn2name = 'Request for Quotation'
      />
      {/* <h1 className='products'>PRODUCTS  </h1> */}
    </>
  );
}
